import axios from "axios";

export default {
  // Gets all teachers
  getTeachers: function () {
    return axios.get("/api/teacher/all/");
  },
  // Gets the teacher with the given id
  getTeacherId: function () {
    return axios.get("/api/teacher/:id");
  },
  // Gets the admins announcements
  getAdminAnnounce: function () {
    return axios.get("/api/admin/announcement");
  },
  // Delete the admins announcements
  deleteAdminAnnounce: function () {
    return axios.delete("/api/admin/announcement");
  },
  // updates admin announcement
  saveAdminAnnounce: function (annUpdate) {
    return axios.put("/api/admin/announcement", annUpdate);
  },
  // Gets all students from database
  getStudents: function () {
    return axios.get("/api/student/all/");
  },
  // Updates students evaluation in database
  studentEval: function (id, students) {
    console.log(students);
    return axios.put("/api/student/eval/" + id, students);
  },
  //  Creates new teacher
  saveNewTeacher: function (newTeacher) {
    return axios.post("/api/teacher/", newTeacher);
  },
  //  Creates new student
  saveNewStudent: function (newStudent) {
    return axios.post("/api/student/", newStudent);
  },
  // Associate Teacher and Student
  associateStudent: function (teacherId, studentId) {
    return axios.post("/api/teacher/studentadd/" + teacherId, {
      id: studentId
    });
  }
};
