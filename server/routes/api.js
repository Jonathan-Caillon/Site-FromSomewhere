const express = require("express");

const user_controller = require("../controllers/user_controller");

const game_controller = require("../controllers/game_controller");

const router = express.Router();

// users router
router
  .post("/users", user_controller.createData)
  .get("/users", user_controller.readData)
  .put("/users/:id", user_controller.updateData)
  .delete("/users/:id", user_controller.deleteData)

  // Game router

  .post("/game", game_controller.createGame)
  .get("/game", game_controller.readGame)
  .put("/game/:id", game_controller.updateGame)
  .delete("/game/:id", game_controller.deleteGame);

module.exports = router;
