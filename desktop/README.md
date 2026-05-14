# Desktop Packaging

This project is ready to package as an Electron desktop app.

## Install tools

Install Node.js with npm from https://nodejs.org, then run:

```powershell
npm install
```

## Run as desktop app

```powershell
npm run desktop
```

## Build Windows installer

```powershell
npm run build:win
```

The installer will be created in `dist`.

## Build Mac app

Run this on a Mac:

```bash
npm install
npm run build:mac
```

macOS apps are best built and signed on macOS.

## App data

In the desktop app, edited purchase orders are saved to the app user-data folder, not the installation folder. This keeps data writable after installation.
