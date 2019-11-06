const express = require("express");
const db = require("../models");

module.exports = app => {
  app.get("/", function (req, res) {
    res.send("Hello 🌏! Keep on Turning⚡️⚡️!");
  });

  // Deletes a Teacher by Id
  app.delete("/api/teacher/:id", function (req, res) {
    let id = req.params.id;
    db.Teacher
      .findById({ _id: id })
      .then(dbTeacher => dbTeacher.remove())
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  })

  // Deletes a Student by Id
  app.delete("/api/student/:id", function (req, res) {
    let id = req.params.id;
    db.Student
      .findById({ _id: id })
      .then(dbStudent => dbStudent.remove())
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  })

};

