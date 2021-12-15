const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Press = mongoose.model("Press", pressSchema);
module.exports = Press;
