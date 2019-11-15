const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  // teacherId: {
  //   type: String
  // },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  classroomSubject: {
    type: String,
    required: true
  },
  aboutMe: {
    type: String,
    required: true
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student"
    }
  ],
  password: {
    type: String,
    required: true
  }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
