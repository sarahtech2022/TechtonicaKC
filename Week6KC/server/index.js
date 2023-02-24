const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(cors());
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.json("Hello, this will be a single page");
});
