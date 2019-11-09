const bcrypt = require("bcrypt");

const hashedPW = bcrypt.hashSync("password123", 10);

console.log(hashedPW);
