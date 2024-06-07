module.exports = (socket) => {
  try {
    console.log("Connected");
    socket.on("connection", (data, callback) => {
      socket.brodcast.emit("calluser", data);
    });
  } catch (error) {
    console.log(error);
  }
};
