// packages
const express = require("express");
// const cors = require("cors");
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
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to Mongo DB!");
});

// add User model route
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// add Location model route
const locationRouter = require("./routes/location");
app.use("/location", locationRouter);

// add Picture model route
const pictureRouter = require("./routes/picture");
app.use("/picture", pictureRouter);

// run server
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
