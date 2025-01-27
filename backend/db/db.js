const mongoose = require("mongoose");

function connectToDB() {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database: ", error.message);
    });
}

module.exports = connectToDB;
