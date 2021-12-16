const express = require("express");

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require("../controllers/user_controller");

const {
  createGame,
  readGame,
  updateGame,
  deleteGame,
} = require("../controllers/game_controller");

const router = express.Router();

router
  .post("/users", createData)
  .get("/users", readData)
  .put("/users/:id", updateData)
  .delete("/users/:id", deleteData)
  .post("/game", createGame)
  .get("/game", readGame)
  .put("/game/:id", updateGame)
  .delete("/game/:id", deleteGame);

module.exports = router;
