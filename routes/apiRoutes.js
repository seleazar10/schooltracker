const express = require("express");
const db = require("../models");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello 🌏! Keep on Turning⚡️⚡️!");
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Displays all teachers
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.get("/api/teacher/all/", function(req, res) {
    db.Teacher.find({}, function(error, teachers) {
      if (error) {
        console.log(error);
      } else return res.json(teachers);
    });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Get Teacher by id api route
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.get("/api/teacher/:id", function(req, res) {
    console.log("LOOKING FOR TEACHER BY ID");
    db.Teacher.findOne({ _id: req.params.id })
      .then(function(dbTeacher) {
        console.log(`Teacher Data: ${dbTeacher}`);
        res.json(dbTeacher);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  //>>>>>>>>>>>Linking StudenIds to Teacher Model>>>>>>>>>>>>>>>>>>>
  //update student id  in Teacher model
  // Route for saving/updating an Teacher's associated Student
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.post("/api/teacher/:id", function(req, res) {
    // TODO
    // ====
    // save the new studentId that gets posted to the Student collection
    db.Student.create(req.body)
      .then(function(data) {
        return db.Teacher.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { studentIds: data.id } },
          { new: true }
        );
      })
      .then(function(dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function(err) {
        res.json(err);
      });
    // then find an teacher from the req.params.id
    // and update it's "studentIds" property with the _id of the new student
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Works = Keep Me!
  //Add a teacherId to a specific student
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.put("/api/studentadd/:id", function(req, res) {
    let id = req.params.id;
    db.Student.updateOne({ _id: id }, { $push: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // //Create teacher
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.post("/api/teacher/", function(req, res) {
    let newTeacher = req.body;
    db.Teacher.create(newTeacher)
      .then(function(dbTeacher) {
        return res.json(dbTeacher);
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Update Teacher object api route
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.put("/api/teacher/:id", function(req, res) {
    let id = req.params.id;
    db.Teacher.findOne({ _id: id }, function(err, foundObject) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        if (!foundObject) {
          res.status(404).send();
        } else {
          if (req.body.aboutMe) {
            foundObject.aboutMe = req.body.aboutMe;
          }
          if (req.body.classroomSubject) {
            foundObject.classroomSubject = req.body.classroomSubject;
          }
          if (req.body.email) {
            foundObject.email = req.body.email;
          }
          if (req.body.name) {
            foundObject.name = req.body.name;
          }
          if (req.body.password) {
            foundObject.password = req.body.password;
          }

          if (req.body.username) {
            foundObject.username = req.body.username;
          }
          foundObject.save(function(err, updatedOject) {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res.send(updatedOject);
            }
          });
        }
      }
    });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Displays all students
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.get("/api/student/all/", function(req, res) {
    db.Student.find({}, function(error, students) {
      if (error) {
        console.log(error);
      } else return res.json(students);
    });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Get student by id api route
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.get("/api/student/:id", function(req, res) {
    db.Student.findOne({ _id: req.params.id })
      .then(function(dbStudent) {
        res.json(dbStudent);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Create student api route
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.post("/api/student/", function(req, res) {
    let newStudent = req.body;
    console.log(`New Student added: ${newStudent}`);
    db.Student.create(newStudent)
      .then(function(dbStudent) {
        return res.json(dbStudent);
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Update a Student Object
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  app.put("/api/student/update/:id", function(req, res) {
    let id = req.params.id;
    db.Student.findOne({ _id: id }, function(err, foundObject) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        if (!foundObject) {
          res.status(404).send();
        } else {
          if (req.body.name) {
            foundObject.name = req.body.name;
          }
          if (req.body.pillar1) {
            foundObject.pillar1 = req.body.pillar1;
          }
          if (req.body.pillar2) {
            foundObject.pillar2 = req.body.pillar2;
          }
          if (req.body.pillar3) {
            foundObject.pillar3 = req.body.pillar3;
          }
          if (req.body.pillar4) {
            foundObject.pillar4 = req.body.pillar4;
          }
          if (req.body.pillar5) {
            foundObject.pillar5 = req.body.pillar5;
          }
          if (req.body.pillar6) {
            foundObject.pillar6 = req.body.pillar6;
          }
          if (req.body.pillar7) {
            foundObject.pillar7 = req.body.pillar7;
          }
          if (req.body.pillar8) {
            foundObject.pillar8 = req.body.pillar8;
          }
          if (req.body.pillar9) {
            foundObject.pillar9 = req.body.pillar9;
          }
          if (req.body.pillar10) {
            foundObject.pillar10 = req.body.pillar10;
          }
          if (req.body.pillar1Notes) {
            foundObject.pillar1Notes = req.body.pillar1Notes;
          }
          if (req.body.pillar2Notes) {
            foundObject.pillar2Notes = req.body.pillar2Notes;
          }
          if (req.body.pillar3Notes) {
            foundObject.pillar3Notes = req.body.pillar3Notes;
          }
          if (req.body.pillar4Notes) {
            foundObject.pillar4Notes = req.body.pillar4Notes;
          }
          if (req.body.pillar5Notes) {
            foundObject.pillar5Notes = req.body.pillar5Notes;
          }
          if (req.body.pillar6Notes) {
            foundObject.pillar6Notes = req.body.pillar6Notes;
          }
          if (req.body.pillar7Notes) {
            foundObject.pillar7Notes = req.body.pillar7Notes;
          }
          if (req.body.pillar8Notes) {
            foundObject.pillar8Notes = req.body.pillar8Notes;
          }
          if (req.body.pillar9Notes) {
            foundObject.pillar9Notes = req.body.pillar9Notes;
          }
          if (req.body.pillar10Notes) {
            foundObject.pillar10Notes = req.body.pillar10Notes;
          }
          if (req.body.comments) {
            foundObject.comments = req.body.comments;
          }
          if (req.body.teacherIds) {
            foundObject.teacherIds = req.body.teacherIds;
          }
          if (req.body.username) {
            foundObject.username = req.body.username;
          }
          if (req.body.password) {
            foundObject.password = req.body.password;
          }

          foundObject.save(function(err, updatedOject) {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res.send(updatedOject);
            }
          });
        }
      }
    });
  });

  //Create all teacher first
  // Deletes a Teacher by Id
  app.delete("/api/teacher/:id", function(req, res) {
    let id = req.params.id;
    db.Teacher.findById({ _id: id })
      .then(dbTeacher => dbTeacher.remove())
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  });

  // Deletes a Student by Id
  app.delete("/api/student/:id", function(req, res) {
    let id = req.params.id;
    db.Student.findById({ _id: id })
      .then(dbStudent => dbStudent.remove())
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  });

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //upload photos
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // app.post("/upload", upload.single("file"), function(req, res, next) {
  //   console.log(req.file);
  //   if (!req.file) {
  //     res.status(500);
  //     return next(err);
  //   }
  //   res.json({
  //     fileUrl: "http://192.168.0.7:3000/images/" + req.file.filename
  //   });
  // });

  // >>>>>>>>>>>>classRoom>>>>>>>>>>>>>>>>>>
  //Create classRoom api route
  // app.post("/api/classroom/", function(req, res) {
  //   console.log(req.body);
  //   db.Classroom.create({ teacherId: req.body.teacherId }).then(function(
  //     error,
  //     dbClassroom
  //   ) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       res.send(dbClassroom);
  //     }
  //   });
  // });

  // // Displays all students
  // app.get("/api/classrooms/", function(req, res) {
  //   db.Classroom.find({}, function(error, classroom) {
  //     if (error) {
  //       console.log(error);
  //     } else return res.json(classroom);
  //   });
  // });

  // app.get("/info/:id", (req, res) => {
  //   // The LONG Redundent Way to to this
  //   const info = {};
  //   // Get the student info
  //   console.log("HIT INFO REQUEST");
  //   db.Student.findOne({ _id: req.params.id })
  //     .then(studentData => {
  //       console.log("INSIDE STUDENT FIND");
  //       console.log(studentData);
  //       info.name = studentData.name;
  //       info.grade = studentData.grade;
  //       info.score = studentData.score;
  //       info.comments = studentData.comments;
  //       // Using classroom id from student info
  //       // Get classroom data
  //       db.Classroom.find({ _id: studentData.classroomId }).then(
  //         classroomArray => {
  //           console.log("CLASSROOM INFO", classroomData);
  //           const teacherId = classroomData.teacherId;
  //           // Using teacher ID from classroom data
  //           // Get teacher info
  //           db.Teacher.findOne({ teacherId: teacherId }).then(teacherArray => {
  //             console.log("TEACHER INFO", teacherData);
  //             info.teacherName = teacherData.name;
  //             info.aboutTeacher = teacherData.aboutMe;

  //             // info.teacherImg = teacherData.img;
  //             res.json(info);
  //             //    {
  //             //       name: "Justin Kunz",
  //             //       grade: "First Grade",
  //             //       scores: [5, 4, 2, 4],
  //             //       comments: "Good work",
  //             //       teacherName: "Mr.Lynch",
  //             //       aboutTeacher:  "osidghsdo08 y8sdvho8shdsodgivh 098h",,
  //             //       img: "q13513513rfaesf"
  //             //     };
  //           });
  //         }
  //       );
  //     })
  //     .catch(err => {
  //       console.log("ERROR ON STUDENT FIND", err);
  //       res.json(err.message);
  //     });
  // });
};
