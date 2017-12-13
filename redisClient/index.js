'use strict';
const electron = require('electron')
const ipc = require('electron').ipcRenderer
const url = require('url')
const path = require('path')

document.getElementById("load").onclick = function (e) {
    var fileUrl = url.format({
        pathname: path.join(__dirname, 'test.html'),
        protocol: 'file:',
    });
    ipc.send('load_url', fileUrl);
    console.log("onclick");
};