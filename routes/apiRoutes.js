const express = require("express");

module.exports = app => {
  app.get("/", function(req, res) {
    res.send("Hello 🌏! Keep on Turning⚡️⚡️!");
  });

  // app.post("/api/teacher", function(req, res) {});
};
