require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

// Adds access to all of our models
module.exports.Place = require("./places");
module.exports.Comment = require("./comment");