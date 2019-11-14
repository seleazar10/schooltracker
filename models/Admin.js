const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  
  announcement: {
    type: String,
    required: true
  }

});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;