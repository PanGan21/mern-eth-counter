const express = require("express");
const connectDB = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: false }));

// connect db
connectDB();

// sessions
app.use(
  session({
    secret: "generaterandomstring",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false
  })
);

app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/increment", require("./routes/api/increment"));
app.use("/api/retrieve", require("./routes/api/retrieve"));

module.exports = app;
