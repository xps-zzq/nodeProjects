const ipc = require('electron').ipcRenderer;
const redis = require("redis");
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const url = require('url')
let mainWindow;
document.getElementById("connect").onclick = function (e) {
    var ip = document.getElementById("ip").value;
    var port = document.getElementById("port").value;
    if (ip.length == 0) {
        ip = "127.0.0.1";
    }
    if (port.length == 0) {
        port = 6379;
    }
  /*  ipc.send(url.format({
        pathname: path.join(__dirname, 'select.html'),
        protocol: 'file:',
        slashes: true
    }));*/
/*    mainWindow = new BrowserWindow({width: 800, height: 600})

    //ipc.send('load_url', `file://${__dirname}/select.html`);
    mainWindow.webContents.openDevTools({ detach: true });
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'select.html'),
        protocol: 'file:',
        slashes: true
    }))*/
    createWindow();
};

function connectionLocal(ip, port) {
    redis.createClient(6379, "127.0.0.1");

}

function createWindow () {
    // Create the browser window.
    //mainWindow = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    BrowserWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'select.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}