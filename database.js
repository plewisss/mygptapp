const fs = require("fs/promises");
const path = require("path");
const { Pool } = require("pg");

const hasDatabase = Boolean(process.env.DATABASE_URL);
const pool = hasDatabase
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL === "false" ? false : { rejectUnauthorized: false }
    })
  : null;

async function ensureDatabase() {
  if (!pool) return;
  await pool.query(`
    create table if not exists records_store (
      id integer primary key default 1,
      records jsonb not null default '[]'::jsonb,
      updated_at timestamptz not null default now(),
      constraint single_records_row check (id = 1)
    )
  `);
  await pool.query(`
    insert into records_store (id, records)
    values (1, '[]'::jsonb)
    on conflict (id) do nothing
  `);
}

async function readRecords(dataFile) {
  if (pool) {
    await ensureDatabase();
    const result = await pool.query("select records from records_store where id = 1");
    return result.rows[0]?.records || [];
  }

  try {
    return JSON.parse(await fs.readFile(dataFile, "utf8"));
  } catch {
    return [];
  }
}

async function writeRecords(dataFile, records) {
  if (!Array.isArray(records)) throw new Error("Expected records array");

  if (pool) {
    await ensureDatabase();
    await pool.query(
      "update records_store set records = $1::jsonb, updated_at = now() where id = 1",
      [JSON.stringify(records)]
    );
    return;
  }

  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(records, null, 2), "utf8");
}

module.exports = {
  ensureDatabase,
  hasDatabase,
  readRecords,
  writeRecords
};
