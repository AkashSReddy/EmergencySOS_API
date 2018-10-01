var mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const numSchema = mongoose.Schema({
  Phone: Number,
  lat: Number,
  lon: Number
});

module.exports = mongoose.model("Num", numSchema);
