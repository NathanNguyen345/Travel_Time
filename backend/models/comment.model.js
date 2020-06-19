const mongoose = require('mongoose');
const { model } = require('./location.model');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userName: {type: String, ref="User", required: true},
    msg: {type: String, required: true}
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;