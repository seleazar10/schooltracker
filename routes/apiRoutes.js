const express = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = app => {
  app.get("/", function (req, res) {
    res.send("Hello 🌏! Keep on Turning⚡️⚡️!");
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> // Displays all teachers // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.get("/api/teacher/all/", function (req, res) {
    db.Teacher.find({}, function (error, teachers) {
      if (error) {
        console.log(error);
      } else return res.json(teachers);
    });
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //Get Teacher by id api route // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.get("/api/teacher/:id", function (req, res) {
    console.log("LOOKING FOR TEACHER BY ID");
    db.Teacher.findOne({ _id: req.params.id })
      .then(function (dbTeacher) {
        console.log(`Teacher Data: ${dbTeacher}`);
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      });
  }); //>>>>>>>>>>>Linking StudenIds to Teacher Model>>>>>>>>>>>>>>>>>>> //update student id  in Teacher model // Route for saving/updating an Teacher's associated Student // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.post("/api/teacher/:id", function (req, res) {
    // TODO
    // ====
    // save the new studentId that gets posted to the Student collection
    db.Student.create(req.body)
      .then(function (data) {
        return db.Teacher.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { studentIds: data.id } },
          { new: true }
        );
      })
      .then(function (dbTeacher) {
        res.json(dbTeacher);
      })
      .catch(function (err) {
        res.json(err);
      }); // then find an teacher from the req.params.id // and update it's "studentIds" property with the _id of the new student
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> // Works = Keep Me! //Add a teacherId to a specific student // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.put("/api/studentadd/:id", function (req, res) {
    let id = req.params.id;
    db.Student.updateOne({ _id: id }, { $push: req.body })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> // //Create teacher // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.post("/api/teacher/", function (req, res) {
    let { password } = req.body;
    bcrypt
      .hash(password, saltRounds)
      .then(function (hashedPassword) {
        db.Teacher.create({
          ...req.body,
          password: hashedPassword
        })
          .then(function (dbTeacher) {
            return res.json(dbTeacher);
          })
          .catch(err => {
            console.log("ERROR ON STUDENT FIND", err);
            res.json(err.message);
          });
      })
      .catch(err => {
        console.log("Bcrypt error", err);
        res.json(err.message);
      });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>Teacher Login>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //with bcrypt
  app.post("/api/login", function (req, res) {
    console.log("login route hit");
    db.Teacher.findOne({
      email: req.body.email
    }).then(function (dbTeacher) {
      console.log(dbTeacher);
      if (dbTeacher === null) {
        return res.json({ status: "error", message: "User does not exist 🤯" });
      }
      console.log("**********************************");
      console.log(dbTeacher);
      bcrypt
        .compare(req.body.password, dbTeacher.password)
        .then(function (success) {
          if (success) {
            res.json(dbTeacher);
          } else {
            {
              res.json({ status: "error", check: "Check  credentials 🧐" });
            }
            //res True
          }
        })
        .catch(function (err) {
          console.log("🤬🤯");
          res.json({ status: "Error 😢", desc: err });
        });
    });
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //Update Teacher object api route // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.put("/api/teacher/:id", function (req, res) {
    let id = req.params.id;
    db.Teacher.findOne({ _id: id }, function (err, foundObject) {
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
          foundObject.save(function (err, updatedOject) {
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
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> // Displays all students // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.get("/api/student/all/", function (req, res) {
    db.Student.find({}, function (error, students) {
      if (error) {
        console.log(error);
      } else return res.json(students);
    });
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //Get student by id api route // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.get("/api/student/:id", function (req, res) {
    db.Student.findOne({ _id: req.params.id })
      .then(function (dbStudent) {
        res.json(dbStudent);
      })
      .catch(function (err) {
        res.json(err);
      });
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //Create student api route // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.post("/api/student/", function (req, res) {
    let newStudent = req.body;
    console.log(`New Student added: ${newStudent}`);
    db.Student.create(newStudent)
      .then(function (dbStudent) {
        return res.json(dbStudent);
      })
      .catch(err => {
        console.log("ERROR ON STUDENT FIND", err);
        res.json(err.message);
      });
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //Update a Student Object // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  app.put("/api/student/eval/:id", function (req, res) {
    let id = req.params.id
    console.log(id);
    const updateObj = req.body;
    console.log(updateObj);
    db.Student.findOneAndUpdate({ _id: id }, { $set: updateObj }, {
      upsert: true
    }, function (err, doc) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(doc);
    })
    // res.json(updateObj);
  });


  app.put("/api/student/update/:id", function (req, res) {
    let id = req.params.id;
    db.Student.findOneAndUpdate({ _id: id }, function (err, foundObject) {
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

          foundObject.save(function (err, updatedOject) {
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

  // Deletes a Teacher by Id
  app.delete("/api/teacher/:id", function (req, res) {
    let id = req.params.id;
    db.Teacher.findById({ _id: id })
      .then(dbTeacher => dbTeacher.remove())
      .then(dbTeacher => res.json(dbTeacher))
      .catch(err => res.status(422).json(err));
  });

  // Deletes a Student by Id
  app.delete("/api/student/:id", function (req, res) {
    let id = req.params.id;
    db.Student.findById({ _id: id })
      .then(dbStudent => dbStudent.remove())
      .then(dbStudent => res.json(dbStudent))
      .catch(err => res.status(422).json(err));
  });

  // Admin creates a new announcement
  app.post("/api/admin/announcement", function (req, res) {
    let newAnnouncement = req.body;
    console.log(`Announcement added: ${newAnnouncement}`);
    db.Admin.create(newAnnouncement)
      .then(function (dbAnnouncement) {
        return res.json(dbAnnouncement);
      })
      .catch(err => {
        console.log("ERROR ON Announcement FIND", err);
        res.json(err.message);
      });
  });

  // Admin updates an announcement
  app.put("/api/admin/announcement", function (req, res) {
    let newAnnouncement = req.body;
    console.log(`Announcement added: ${newAnnouncement}`);
    db.Admin.updateMany(newAnnouncement)
      .then(function (dbAnnouncement) {
        return res.json(dbAnnouncement);
      })
      .catch(err => {
        console.log("ERROR ON Announcement FIND", err);
        res.json(err.message);
      });
  });

  // Find all Admin announcements
  app.get("/api/admin/announcement", function (req, res) {
    db.Admin.find({}, function (error, announce) {
      if (error) {
        console.log(error);
      } else return res.json(announce);
    });
  });

  // Admin deletes an announcement
  app.delete("/api/admin/announcement", function (req, res) {
    let newAnnouncement = req.body;
    console.log(`Announcement added: ${newAnnouncement}`);
    db.Admin.deleteMany(newAnnouncement)
      .then(function (dbAnnouncement) {
        return res.json(dbAnnouncement);
      })
      .catch(err => {
        console.log("ERROR ON Announcement FIND", err);
        res.json(err.message);
      });
  });



};
