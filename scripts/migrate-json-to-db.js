const fs = require("fs/promises");
const path = require("path");
const { writeRecords } = require("../database");

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to migrate records into Supabase.");
  }

  const dataFile = path.join(__dirname, "..", "user-records.json");
  const records = JSON.parse(await fs.readFile(dataFile, "utf8"));
  await writeRecords(dataFile, records);
  console.log(`Migrated ${records.length} records into PostgreSQL.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
