const express = require("express");
const db = require("../models");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello 🌏! Keep on Turning⚡️⚡️!");
  });

  //>>>>>>>>>>>>>teacher>>>>>>>>>>>>>>>>>>
  // Displays all teachers
  app.get("/api/teachers/", function(req, res) {
    db.Teacher.find({}, function(error, teachers) {
      if (error) {
        console.log(error);
      } else return res.json(teachers);
    });
  });

  //Get Teacher by id api route
  app.get("/teacher/:id", function(req, res) {
    db.Teacher.findOne({ _id: req.params.id })
      .then(function(dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // //Create teacher api routes
  app.post("/api/teacher/", function(req, res) {
    let newTeacher = req.body;
    newTeacher.studentIds = [newTeacher.studentIds];
    // newStudent.classroomId = newStudent.classroomId;

    db.Teacher.create(newTeacher)
      .then(function(dbTeacher) {
        return res.json(dbTeacher);
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  });

  //>>>>>>>>>>>>student>>>>>>>>>>>>>>>>>>>>

  // Displays all students
  app.get("/api/students/", function(req, res) {
    db.Student.find({}, function(error, students) {
      if (error) {
        console.log(error);
      } else return res.json(students);
    });
  });

  //Get student by id api route
  app.get("/student/:id", function(req, res) {
    db.Student.findOne({ _id: req.params.id })
      .then(function(dbStudent) {
        res.json(dbStudent);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //Create student api route
  app.post("/api/student/", function(req, res) {
    let newStudent = req.body;
    newStudent.teacherIds = [newStudent.teacherIds];
    // newStudent.classroomId = newStudent.classroomId;

    db.Student.create(newStudent)
      .then(function(dbStudent) {
        return res.json(dbStudent);
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  });

  // >>>>>>>>>>>>classRoom>>>>>>>>>>>>>>>>>>
  //Create classRoom api route
  app.post("/api/classroom/", function(req, res) {
    console.log(req.body);
    db.Classroom.create({ teacherId: req.body.teacherId }).then(function(
      error,
      dbClassroom
    ) {
      if (error) {
        console.log(error);
      } else {
        res.send(dbClassroom);
      }
    });
  });

  // Displays all students
  app.get("/api/classrooms/", function(req, res) {
    db.Classroom.find({}, function(error, classroom) {
      if (error) {
        console.log(error);
      } else return res.json(classroom);
    });
  });

  app.get("/info/:id", (req, res) => {
    // The LONG Redundent Way to to this
    const info = {};
    // Get the student info
    console.log("HIT INFO REQUEST");
    db.Student.findOne({ _id: req.params.id })
      .then(studentData => {
        console.log("INSIDE STUDENT FIND");
        console.log(studentData);
        info.name = studentData.name;
        info.grade = studentData.grade;
        info.score = studentData.score;
        info.comments = studentData.comments;
        // Using classroom id from student info
        // Get classroom data
        db.Classroom.find({ _id: studentData.classroomId }).then(
          classroomArray => {
            console.log("CLASSROOM INFO", classroomData);
            const teacherId = classroomData.teacherId;
            // Using teacher ID from classroom data
            // Get teacher info
            db.Teacher.findOne({ teacherId: teacherId }).then(teacherArray => {
              console.log("TEACHER INFO", teacherData);
              info.teacherName = teacherData.name;
              info.aboutTeacher = teacherData.aboutMe;

              // info.teacherImg = teacherData.img;
              res.json(info);
              //    {
              //       name: "Justin Kunz",
              //       grade: "First Grade",
              //       scores: [5, 4, 2, 4],
              //       comments: "Good work",
              //       teacherName: "Mr.Lynch",
              //       aboutTeacher:  "osidghsdo08 y8sdvho8shdsodgivh 098h",,
              //       img: "q13513513rfaesf"
              //     };
            });
          }
        );
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  });
};
