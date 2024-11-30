const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URL}/blogosphere`)
    .then(() => {
      console.log("Database Connected Successfully!");
    })
    .catch(() => {
      console.log("Databse Not Connected");
    });
};

module.exports = connectDB;
