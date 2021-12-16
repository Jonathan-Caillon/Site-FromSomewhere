const express = require("express");
const router = express.Router();
const user_controller = require("../../controllers/user_controller");

router
  .post("/", user_controller.createData)
  .get("/", user_controller.readData)
  .put("/:id", user_controller.updateData)
  .delete("/:id", user_controller.deleteData);

module.exports = router;
