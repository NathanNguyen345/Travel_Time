const express = require("express");
const router = express.Router();
let User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ firstName, lastName, userName, email, password });

  newUser
    .save()
    .then(() => res.status(200).json("User Added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
