const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json()); // Use to send any JSON object 

// NodeJs MondoDb Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

console.log("sanket");

// Setting up the expressJs and listening to the port
app.listen("5000", () => {
    console.log("Backend is running.");
  });