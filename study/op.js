const redis = require("redis")


var localClient = null;
document.getElementById("localConnection").onclick = function () {
    localClient = connection('127.0.0.1', 6379);
}

function connection(ip, port) {
    // noinspection JSAnnotator
    localClient = redis.createClient(port, ip);
    localClient.on('ready', function (err) {
        document.getElementById("console").innerText = "连接成功"
    });
    localClient.info(function (err, response) {
        console.log(err, response);

    });
    localClient.on('error', function (error) {
        console.log(error);
    });
    return localClient;
}