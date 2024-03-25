const mongoose = require("mongoose");

const postSchema = mongoose.model(
  'Post',
  new mongoose.Schema({
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    fullname:String,
    text:String,
    image: String,
    createdAt: { type: Date, default: Date.now },
  })

)
module.exports = postSchema