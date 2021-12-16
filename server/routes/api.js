const express = require("express");

const user_controller = require("../controllers/user_controller");
const game_controller = require("../controllers/game_controller");
const press_controller = require("../controllers/press_controller");

const router = express.Router();

// Users router
router
  .post("/users", user_controller.createData)
  .get("/users", user_controller.readData)
  .put("/users/:id", user_controller.updateData)
  .delete("/users/:id", user_controller.deleteData)

  // Game router

  .post("/game", game_controller.createData)
  .get("/game", game_controller.readData)
  .put("/game/:id", game_controller.updateData)
  .delete("/game/:id", game_controller.deleteData)

  // Press router

  .post("/press", press_controller.createData)
  .get("/press", press_controller.readData)
  .put("/press/:id", press_controller.updateData)
  .delete("/press/:id", press_controller.deleteData);

module.exports = router;
