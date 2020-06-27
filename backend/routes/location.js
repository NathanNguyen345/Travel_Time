const express = require("express");
const router = express.Router();
let Location = require("../models/location.model");
let Picture = require("../models/picture.model");

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

// router.post("/addPicture", (req, res) => {
//   const locationId = req.body.id;

//   const testPost = new Picture({
//     name: "Test Picture",
//     link: "Test Picture Link",
//     description: "Test Description",
//     likes: 100,
//     dislikes: 10,
//   });

//   //   Location.findById({ _id: locationId }, (err, locationFound) => {
//   //     locationFound.pictures.push(testPost);
//   //     locationFound.save();
//   //     testPost.save();
//   //     res.status(200).json({ msg: "Location Found" });
//   //   });

//   Location.findById({ _id: locationId })
//     .populate("pictures")
//     .exec((err, pictures) => {
//       console.log(pictures);
//       res.status(200).json({ msg: "okay" });
//     });
// });

module.exports = router;
