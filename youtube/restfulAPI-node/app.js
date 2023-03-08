const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv/config");

app.use(bodyParser.json())
app.use(cors())

const PORT = 3000;

//Import Route
const postRoute = require("./routes/post");

app.use("/post", postRoute);

app.get("/", (req, res, next) => {
  res.send("Welcome home");
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

app.listen(PORT);
