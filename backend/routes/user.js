const express = require("express");
const router = express.Router();
let User = require("../models/user.model");

// Create User API
router.post("/add", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  // Validate if the user already exist within the database
  User.findOne({ userName: userName }, (err, userFound) => {
    if (userFound) {
      res.status(401).json({ msg: "The username already exist." });
    } else {
      const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      newUser
        .save()
        .then(() => res.status(201).json({ msg: "User Added" }))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    }
  });
});

// Update User information
router.put("/changeUserInfo", (req, res) => {
  const userId = req.body.userId;
  const updatedFirstName = req.body.firstName;
  const updatedLastName = req.body.lastName;
  const updatedUserName = req.body.userName;
  const updatedEmail = req.body.email;

  // Set updates
  update = {
    $set: {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      userName: updatedUserName,
      email: updatedEmail,
    },
  };

  // Find record and update user information
  User.findOneAndUpdate({ _id: userId }, update, (err, userFound) => {
    if (userFound) {
      res.status(201).json({ msg: "User information updated." });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  });
});

// Update User password
router.put("/updatePassword", (req, res) => {
  const userId = req.body.userId;
  const updatedPassword = req.body.password;

  // Set updates
  update = {
    $set: {
      password: updatedPassword,
    },
  };

  // Query user by id to see if user exist
  User.findById({ _id: userId }, (err, userFound) => {
    if (userFound) {
      // Throw error if updated password as db record
      if (userFound.password === updatedPassword) {
        res
          .status(400)
          .json({ msg: "Password can't be the same as current password" });
      } else {
        // Update user password
        User.findByIdAndUpdate(
          { _id: userFound._id },
          update,
          (err, userUpdated) => {
            if (userUpdated) {
              res.status(200).json({ msg: "User password updated" });
            } else {
              res.status(400).json({ msg: "Password update unsuccessful" });
            }
          }
        );
      }
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  });
});

// Delete User API
router.delete("/delete", (req, res) => {
  const userName = req.body.userName;

  // Find if user exist then delete the user
  User.findOneAndDelete({ userName: userName }, (err, userFound) => {
    if (userFound) {
      res
        .status(200)
        .json({ msg: `User ${userFound.userName} has been deleted.` });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  });
});

module.exports = router;
