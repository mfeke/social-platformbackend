const mongoose = require("mongoose");

const postSchema = mongoose.model(
  'Post',
  new mongoose.Schema({
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    fullname:String,
    content: String,
    like:Number,
    createdAt: { type: Date, default: Date.now },
  })

)
module.exports = postSchema