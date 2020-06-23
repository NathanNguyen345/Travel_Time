// packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// dotenv config
require("dotenv").config();

// app & port
const app = express();
const port = process.env.port || 5000;

// use middleware
// app.use(cors);
app.use(express.json());

// connect to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo DB!");
});

// add model routes
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// run server
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});