//Dependencies
const express = require("express");
const routes = require("./routes/apiRoutes");

// Initialize Express
const app = express();

//Established a port to listen on
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function(req, res) {
//   res.send("Hello 🌏! Keep on Turning!");
// });

//API routes
routes(app);
// Start the server
app.listen(PORT, () => {
  console.log(`🌏 App is now listening on PORT: ${PORT}!!!`);
});
