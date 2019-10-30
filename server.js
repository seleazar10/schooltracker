//Dependencies
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", function(req, res) {
  res.send("Hello 🌏! Keep on Turning!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌏 App is now listening on PORT: ${PORT}!!!`);
});
