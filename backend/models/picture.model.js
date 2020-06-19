const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pictureSchema = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    comments: { type: Array, ref: "Comment" },
  },
  {
    timestamps: true,
  }
);

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;
