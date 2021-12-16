const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("error: " + err.stack);
    process.exit(1);
  });
mongoose.connection.on("open", () => {
  console.log("connected to database");
});

const port = process.env.PORT || 9000;
// middleware
app.use(express.json());
app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

app.use("/api", require("./routes/api"));
app.listen(port);
module.exports = app;
