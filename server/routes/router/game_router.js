const express = require("express");
const router = express.Router();
const game_controller = require("../../controllers/game_controller");
const { upload } = require("../../helper/filehelper");

router
  .post("/", upload.single("file"), game_controller.createData)
  .get("/", game_controller.readData)
  .put("/:id", game_controller.updateData)
  .delete("/:id", game_controller.deleteData);

module.exports = router;
