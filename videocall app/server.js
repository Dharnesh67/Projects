require("dotenv").config();
const express = require("express");
// const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./App/routes");
const socketmanager = require("./App/socketmanager");

const port = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server);
app.use([cors(), bodyParser.json(), bodyParser.urlencoded({ extended: false })]);

io.on("connection", socketmanager);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
