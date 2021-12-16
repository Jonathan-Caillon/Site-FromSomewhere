const express = require("express");
const router = express.Router();
const press_controller = require("../../controllers/press_controller");

router
  .post("/", press_controller.createData)
  .get("/", press_controller.readData)
  .put("/:id", press_controller.updateData)
  .delete("/:id", press_controller.deleteData);

module.exports = router;
