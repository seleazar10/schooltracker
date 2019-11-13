import axios from "axios";

export default {
  // Gets all books
  getTeachers: function() {
    return axios.get("/api/teachers");
  },
  // Gets the book with the given id
  getTeacher: function(id) {
    return axios.get("/api/teacher/" + id);
  },
  // Deletes the book with the given id
  deleteTeacher: function(id) {
    return axios.delete("/api/teacher/" + id);
  },
  // Saves a book to the database
  saveTeacher: function(teacherData) {
    return axios.post("/api/Teacher", teacherData);
  }
};
