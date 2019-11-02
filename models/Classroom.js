const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  teacherId: {
    type: Number,
    required: true
  }
});

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom;
