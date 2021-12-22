const Game = require("../models/game_schema");
const fs = require("fs");

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

const createData = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body.title);
    const file = new Game({
      title: req.body.title,
      imageName: req.files.image[0].originalname,
      imagePath: req.files.image[0].path,
      imageType: req.files.image[0].mimetype,
      imageSize: fileSizeFormatter(req.files.image[0].size, 2),
      gameTitleName: req.files.gameTitle[0].originalname,
      gameTitlePath: req.files.gameTitle[0].path,
      gameTitleType: req.files.gameTitle[0].mimetype,
      gameTitleSize: fileSizeFormatter(req.files.gameTitle[0].size, 2),
    });
    await file.save();
    res.status(201).send("File uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const readData = (req, res) => {
  Game.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateData = (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log("Game updated!");
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res) => {
  Game.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error("Game not available");
      }
      return data.remove();
    })
    .then((data) => {
      console.log("Game removed!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
};
