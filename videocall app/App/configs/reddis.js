let redis = require('redis');

let client = redis.createClient();

client.on("error", (err) => {
    console.log(err);
});

module.exports = client;