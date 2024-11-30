const express = require("express");
require("dotenv").config();
const cors = require("cors");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const connectDB = require("./config/mongoDB");

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

//Setup Router
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

// Connect Database
connectDB();

app.listen(PORT, () => {
  console.log("App Running On port " + PORT);
});
