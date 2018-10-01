var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
const salt_factor = 8;

mongoose.set("useCreateIndex", true);

const userSchema = mongoose.Schema({
  email: String,
  password: String
});

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(salt_factor), null);
};

module.exports = mongoose.model("User", userSchema);
