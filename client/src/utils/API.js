import axios from "axios";

export default {
  // Gets all teachers
  getTeachers: function() {
    return axios.get("/api/teacher/all/");
  },
  // Gets the book with the given id
  getTeacherId: function() {
    return axios.get("/api/teacher/:id");
  },
  getAdminAnnounce: function() {
    return axios.get("/api/admin/announcement");
  },
  deleteAdminAnnounce: function() {
    return axios.delete("/api/admin/announcement")
  },
  saveAdminAnnounce: function(annUpdate) {
    return axios.put("/api/admin/announcement", annUpdate)
  },
  studentEval: function(students) {
    return axios.put("/api/student/update/5dbf1ae6ba23ca5f11779e4d", students)
  }

};