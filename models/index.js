const mongoose = require("mongoose")
const dbConfig = require("../db/db.config")
mongoose.Promise = global.Promise

const db ={};
db.mongoose = mongoose
db.user = require("../models/auth.models")
db.url = dbConfig.url

module.exports = db