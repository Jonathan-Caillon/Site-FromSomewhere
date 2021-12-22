const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
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
  imageType: {
    type: String,
    required: true,
  },
  imageSize: {
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
  gameTitleType: {
    type: String,
    required: true,
  },
  gameTitleSize: {
    type: String,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema, "game");
module.exports = Game;
