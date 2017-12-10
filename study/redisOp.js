const electron = require('electron')
const {BrowserWindow} = electron
const {app} = electron
const redis = require("redis");
const client =     redis.createClient(6379, "127.0.0.1");


document.getElementById("submitCmd").onclick = function (e) {
    var inputCmd = document.getElementById("inputCmd").value;
}
function connectionLocal(ip, port) {

}
