//Dependencies
const express = require("express");
const routes = require("./routes/apiRoutes");
const mongoose = require("mongoose");

// Initialize Express
const app = express();

//Require all models
const db = require("./models");

//Established a port to listen on
var PORT = process.env.PORT || 8000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API routes
routes(app);

//If deployed, use the deployed database. Otherwise us the local mongHeadlines database
// db = process.env.MONGODB_URI || "mongodb://localhost/schoolTracker";

//Connect to the MongoDB with Heroku settings
mongoose.connect("mongodb://localhost/schoolTracker", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌏 App is now listening on PORT: ${PORT}!!!`);
});
