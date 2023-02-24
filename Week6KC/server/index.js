const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
const jsonParser = bodyParser.json();

app.use(express.static("../client"));
//express.static(path.join(_dirnam,"/client");)

app.get("/", (req, res) => {
  //res.json("Hello, this will be a single page");
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/aboutme", (req, res) => {
  //res.json("Hello, this will be a single page");
  res.sendFile(path.join(__dirname, "../client/aboutme.html"));
});

app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
