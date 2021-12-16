const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    body: {
      type: String,
      required: [true, "body field is required"],
    },
  },
  { timestamps: true }
);

const Press = mongoose.model("Press", pressSchema);
module.exports = Press;
