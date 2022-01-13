const express = require("express");

const game_router = require("./router/game_router");
const press_router = require("./router/press_router");

const router = express.Router();

router

  // Game router

  .use("/game", game_router)

  // Press router

  .use("/press", press_router);

module.exports = router;
