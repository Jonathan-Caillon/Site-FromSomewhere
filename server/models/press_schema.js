const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressSchema = new Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  body: {
    type: String,
    required: [true, "body field is required"],
  },
  categorie: {
    type: String,
    enum: ["NEW", "STATUS"],
    default: "NEW",
    required: [true, "body field is required"],
  },
});

const Press = mongoose.model("Press", pressSchema, "press");
module.exports = Press;
