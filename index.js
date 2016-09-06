const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on("window-all-closed", function() {
    if (process.platform != "darwin") { app.quit(); }
});

app.on("ready", function() {
    let mainWindow = new BrowserWindow({
        width: 640,
        height: 480,
    });

    mainWindow.loadURL(`file://${__dirname}/build/index.html`);
});