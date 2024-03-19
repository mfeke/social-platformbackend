
const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstname : String,
        lastname : String,
        email: String,
        password: String,

    })

)
module.exports = User
