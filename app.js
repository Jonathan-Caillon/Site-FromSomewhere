const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/fromsomewhere?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(
    (result) => console.log("Connexion à MongoDB réussie !"),
    app.listen(7000)
  )
  .catch((err) => console.log(err));
// middleware
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));
