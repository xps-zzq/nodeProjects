const redis = require("redis")

function getLocal(ip, port) {
    const localClient = redis.createClient(port, ip, {connect_timeout: 1});
    client.info(function (err, response) {
        console.log(err, response);
    });
    client.on('error', function (error) {
        console.log(error);
    });
    return localClient;
}

module.exports = getLocal