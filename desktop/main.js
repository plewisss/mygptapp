const path = require("path");
const { app, BrowserWindow, shell } = require("electron");

let server;

function createWindow() {
  const windowIcon = process.platform === "win32" ? "company-logo.ico" : "company-logo-app.png";
  const win = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 1100,
    minHeight: 760,
    title: "CABSI NON SPECIALIZED WHOLESALE TRADING",
    icon: path.join(__dirname, "..", windowIcon),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.removeMenu();
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  server.listen(0, "127.0.0.1", () => {
    const { port } = server.address();
    win.loadURL(`http://127.0.0.1:${port}/?desktop=1`);
  });
}

app.whenReady().then(() => {
  process.env.DATA_DIR = app.getPath("userData");
  ({ server } = require("../server"));
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (server?.listening) server.close();
  if (process.platform !== "darwin") app.quit();
});
