const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true
  // },
  studentId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pillar1: {
    type: Number,
    default: 0
  },
  pillar1Notes: {
    type: String
  },
  pillar2: {
    type: Number,
    default: 0
  },
  pillar2Notes: {
    type: String
  },

  pillar3: {
    type: Number,
    default: 0
  },
  pillar3Notes: {
    type: String
  },
  pillar4: {
    type: Number,
    default: 0
  },
  pillar4Notes: {
    type: String
  },
  pillar5: {
    type: Number,
    default: 0
  },
  pillar5Notes: {
    type: String
  },
  pillar6: {
    type: Number,
    default: 0
  },
  pillar6Notes: {
    type: String
  },
  pillar7: {
    type: Number,
    default: 0
  },
  pillar7Notes: {
    type: String
  },
  pillar8: {
    type: Number,
    default: 0
  },
  pillar8Notes: {
    type: String
  },
  pillar9: {
    type: Number,
    default: 0
  },
  pillar9Notes: {
    type: String
  },
  pillar10: {
    type: Number,
    default: 0
  },
  pillar10Notes: {
    type: String
  },
  comments: {
    type: String
  },
  teacherIds: {
    type: Array
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  missingwork: {
    type: String,
  }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
