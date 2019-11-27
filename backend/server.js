const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
// require("dotenv").config();

const app = express();

app.use(express.json({ extended: false }));
// app.use(cors);

// connect db
connectDB();

app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/increment", require("./routes/api/increment"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
