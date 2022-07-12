const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
//MiddleWare
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Doctor calling!");
});

app.listen(port, () => {
  console.log(`Hello Doctor listening on port ${port}`);
});
