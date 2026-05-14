const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { hasDatabase, readRecords, writeRecords } = require("./database");

const root = __dirname;
const port = Number(process.env.PORT || 4177);
const host = process.env.HOST || "0.0.0.0";
const dataRoot = process.env.DATA_DIR || root;
const dataFile = path.join(dataRoot, "user-records.json");
const authUsername = process.env.APP_USERNAME || "plouis34";
const authPassword = process.env.APP_PASSWORD || "canon1000d";
const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
const sessionCookieName = "cabsi_session";
const cookieMaxAgeSeconds = 60 * 60 * 24 * 7;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png"
};

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://localhost:${port}`);
  if (requestUrl.pathname === "/api/login") {
    handleLoginApi(request, response);
    return;
  }
  if (requestUrl.pathname === "/api/session") {
    writeJson(response, 200, { authenticated: isAuthenticated(request) });
    return;
  }
  if (requestUrl.pathname === "/api/logout") {
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Set-Cookie": `${sessionCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`
    });
    response.end(JSON.stringify({ ok: true }));
    return;
  }
  if (requestUrl.pathname === "/api/records") {
    if (!isAuthenticated(request)) {
      writeJson(response, 401, { error: "Login required" });
      return;
    }
    handleRecordsApi(request, response);
    return;
  }

  const safePath = path.normalize(decodeURIComponent(requestUrl.pathname))
    .replace(/^[/\\]+/, "")
    .replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath === "" ? "index.html" : safePath);

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    response.end(contents);
  });
});

function handleLoginApi(request, response) {
  if (request.method !== "POST") {
    response.writeHead(405, { "Content-Type": "application/json; charset=utf-8", "Allow": "POST" });
    response.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
    if (body.length > 20_000) request.destroy();
  });
  request.on("end", () => {
    try {
      const credentials = JSON.parse(body || "{}");
      if (credentials.username !== authUsername || credentials.password !== authPassword) {
        writeJson(response, 401, { error: "Invalid login" });
        return;
      }

      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Set-Cookie": `${sessionCookieName}=${createSessionCookieValue(credentials.username)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${cookieMaxAgeSeconds}${process.env.NODE_ENV === "production" ? "; Secure" : ""}`
      });
      response.end(JSON.stringify({ ok: true }));
    } catch {
      writeJson(response, 400, { error: "Invalid login payload" });
    }
  });
}

function isAuthenticated(request) {
  const cookieValue = parseCookies(request.headers.cookie || "")[sessionCookieName];
  if (!cookieValue) return false;
  const [username, expiresAt, signature] = cookieValue.split(".");
  if (!username || !expiresAt || !signature) return false;
  if (Number(expiresAt) < Date.now()) return false;
  const expectedSignature = signSession(username, expiresAt);
  const signatureBuffer = Buffer.from(signature);
  const expectedSignatureBuffer = Buffer.from(expectedSignature);
  return username === authUsername
    && signatureBuffer.length === expectedSignatureBuffer.length
    && crypto.timingSafeEqual(signatureBuffer, expectedSignatureBuffer);
}

function parseCookies(cookieHeader) {
  return cookieHeader.split(";").reduce((cookies, cookie) => {
    const [rawName, ...rawValue] = cookie.trim().split("=");
    if (!rawName) return cookies;
    cookies[rawName] = decodeURIComponent(rawValue.join("="));
    return cookies;
  }, {});
}

function writeJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function createSessionCookieValue(username) {
  const expiresAt = String(Date.now() + cookieMaxAgeSeconds * 1000);
  return `${username}.${expiresAt}.${signSession(username, expiresAt)}`;
}

function signSession(username, expiresAt) {
  return crypto
    .createHmac("sha256", sessionSecret)
    .update(`${username}.${expiresAt}`)
    .digest("hex");
}

function handleRecordsApi(request, response) {
  if (request.method === "GET") {
    readRecords(dataFile)
      .then((records) => writeJson(response, 200, records))
      .catch(() => writeJson(response, 500, { error: "Unable to load records" }));
    return;
  }

  if (request.method === "PUT") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) request.destroy();
    });
    request.on("end", () => {
      try {
        const parsed = JSON.parse(body || "[]");
        if (!Array.isArray(parsed)) throw new Error("Expected array");
        writeRecords(dataFile, parsed)
          .then(() => writeJson(response, 200, { ok: true }))
          .catch(() => writeJson(response, 500, { error: "Unable to save records" }));
      } catch {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ error: "Invalid records payload" }));
      }
    });
    return;
  }

  response.writeHead(405, { "Content-Type": "application/json; charset=utf-8", "Allow": "GET, PUT" });
  response.end(JSON.stringify({ error: "Method not allowed" }));
}

if (require.main === module) {
  fs.mkdirSync(dataRoot, { recursive: true });
  server.listen(port, host, () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : port;
    console.log(`CABSI app running at http://localhost:${actualPort}`);
    getLanUrls(actualPort).forEach((url) => console.log(`LAN access: ${url}`));
    console.log(hasDatabase ? "Data store: PostgreSQL" : `Data file: ${dataFile}`);
  });
}

module.exports = { server, dataFile };

function getLanUrls(actualPort) {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((network) => network && network.family === "IPv4" && !network.internal)
    .map((network) => `http://${network.address}:${actualPort}`);
}
