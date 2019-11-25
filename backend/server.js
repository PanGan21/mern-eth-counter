const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// define routes
app.use("/api/increment", require("./routes/api/increment"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
