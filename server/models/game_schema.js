const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  gameTitleName: {
    type: String,
    required: true,
  },
  gameTitlePath: {
    type: String,
    required: true,
  },
  metacritique: [Object],
});

const Game = mongoose.model("Game", gameSchema, "game");
module.exports = Game;
