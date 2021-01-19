const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  "Practice Name": String,
  "Practice Type": String,
  "First Name": String,
  "Last Name": String,
  "Professional Designation": String,
  Address1: String,
  City: String,
  State: String,
  Zip: String,
  Phone: String,
  Fax: String,
  Gender: String,
});

module.exports = mongoose.model("excelContent", userSchema);
