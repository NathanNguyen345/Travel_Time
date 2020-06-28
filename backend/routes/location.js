const express = require("express");
const router = express.Router();
let Location = require("../models/location.model");

// Add Location API
router.get("/addLocation", (req, res) => {
  const locationName = req.body.name;
  const locationLink = req.body.link;

  const locationPost = new Location({
    name: locationName,
    link: locationLink,
  });

  locationPost.save();

  res.status(200).json({ msg: "Location added" });
});

// Get Locations from db
router.get("/getLocation", (req, res) => {
  Location.find((err, locations) => {
    if (err) {
      res.status(400).json({ msg: "Bad Request" });
    } else {
      res.status(200).json(locations);
    }
  });
});

module.exports = router;
