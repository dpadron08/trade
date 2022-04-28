const express = require("express");
const viewerRouter = express.Router();

const {
  getObjectData,
  getAllObjectData,
} = require("../controllers/viewer.controller");

viewerRouter.get("/", getAllObjectData);
viewerRouter.get("/:name", getObjectData);

module.exports = viewerRouter;
