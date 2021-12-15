const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
