//Dependencies
const http = require('http');
const express = require("express");
const routes = require("./routes/apiRoutes");
const mongoose = require("mongoose");
const { addUser, removeUser, getUser, getUsersInRoom } = require('./server/users');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');

// Initialize Express
const app = express();
const server = http.createServer(app);
const io = socketio(server);
//Require all models
const db = require("./models");

//Established a port to listen on
var PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
//API routes
routes(app);

//If deployed, use the deployed database. Otherwise us the local mongHeadlines database
//db = process.env.MONGODB_URI || "mongodb://localhost/schoolTracker";

//Connect to the MongoDB with Heroku settings
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schoolTracker", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });


  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});




// Start the server
app.listen(PORT, () => {
  console.log(`🌏 App is now listening on PORT: ${PORT}!!!`);
});
