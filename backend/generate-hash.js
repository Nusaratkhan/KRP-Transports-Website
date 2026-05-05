const bcrypt = require("bcryptjs");

const password = "Moni@24!";

bcrypt.hash(password, 10).then(hash => {
  console.log("Hashed password:");
  console.log(hash);
});