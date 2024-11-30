const express = require("express");
var cors = require("cors");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

app.listen(4000, () => {
  console.log("App Running On port 4000");
});
