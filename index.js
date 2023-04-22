require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user"); //Check path relative to ur system if it throws error
const usrstr = require("./routes/userstring");

app.use(express.json({ limit: "3mb" }));
app.use(express.urlencoded({ limit: "3mb", extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// app.options("*", cors());
// app.use(cors());
//require("./startup/db"); // db connection
// require("./startup/routes")(app); // routes

app.use("/user", user);
app.use("/userstr", usrstr);

//connect to db
const MONGODB_URI = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Established"))
  .catch((err) => {
    console.log("Error connecting to Database: " + err);
  });
// sample route
app.get("/", (req, res) => {
  res.json({ message: "Near8 Backend Port Running!" });
});

// server establishment
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Backend server has started at " + PORT);
});
