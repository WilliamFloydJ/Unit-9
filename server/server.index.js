const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const { AsAwait } = require("./controllers/main.controller.js");

app.get("/", (req, res) => {
  var options = {
    root: path.join(__dirname, "../Public"),
  };

  var fileName = "index.html";
  res.sendFile(fileName, options);
});

app.use("/public", express.static(path.join(__dirname, "../Public")));

app.get("/api/Await", AsAwait);

const port = process.env.PORT || 4199;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
