const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
