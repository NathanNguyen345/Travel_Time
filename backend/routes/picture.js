const express = require("express");
const router = express.Router();
const multer = require("multer");
let upload = multer();
let Picture = require("../models/picture.model");
let Location = require("../models/location.model");

// Post Picture to Location API
router.post("/addPicture", upload.single("uploadFile"), (req, res) => {
  const locationId = req.body.id;
  const pictureName = req.body.name;

  // Create new Picture model
  const picturePost = new Picture({
    name: pictureName,
    link: "Test Picture Link",
    description: "Test Description",
    likes: 0,
    dislikes: 0,
  });

  // Find Location by _id and appened new Picture subdoc
  Location.findById({ _id: locationId }, (err, foundLocation) => {
    if (foundLocation) {
      picturePost.save();
      foundLocation.pictures.push(picturePost);
      foundLocation.save();
      res.status(200).json({ msg: "Picture added" });
    } else {
      res.status(400).json({ msg: "Invalid location id" });
    }
  });
});

// Delete Picture from Location API
router.delete("/deletePicture", (req, res) => {
  const locationId = req.body.id;
  const pictureId = req.body.pictureId;

  // Find Location using ID
  Location.findById({ _id: locationId }, (err, locationFound) => {
    if (locationFound) {
      // Delete from Picture DB and Location Subdoc
      Picture.findByIdAndDelete({ _id: pictureId }, (err, pictureFound) => {
        if (err) {
          res.status(400).json({ msg: "Picture not found" });
        } else {
          locationFound.pictures.pull(pictureId);
          locationFound.save();
          res.status(200).json({ msg: "Picture Deleted" });
        }
      });
    } else {
      res.status(400).json({ msg: "Location not found" });
    }
  });
});

module.exports = router;
