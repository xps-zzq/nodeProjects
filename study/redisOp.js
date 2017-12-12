const electron = require('electron')
const {BrowserWindow} = electron
const {app} = electron
const redis = require("redis");
const client = redis.createClient(6379, "127.0.0.1");


document.getElementById("submitCmd").onclick = function (e) {
    var val = document.getElementById("inputCmd").value;
    var strings = val.toString().split(",");
    set(strings[0], strings[1]);
    console.log("set key value" + strings[0] + ":"+strings[1]);
    client.get(strings[0]);
};

function set(key,value) {
    client.set(key, value);
}

function connectionLocal(ip, port) {

}
