const reddisclient = require("./configs/reddis");

exports.saveCallId = async (id, signaldata) => {
  return new Promise((resolve, reject) => {
    reddisclient.SET(id, JSON.stringify(signaldata), "EX",86400,(err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
};
exports.getCallId = async (id) => {
  return new Promise((resolve, reject) => {
    reddisclient.GET(id, (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(reply));
      }
    });
  });
};
