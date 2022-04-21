const Object3D = require("../models/object3D.model");

const getViewerExplanation = async (req, res) => {
  res.type("text/plain");
  return res.send("Please add an object name and specify mtl obj jpg");
};

const getObjectMTL = async (req, res) => {
  res.type("text/plain");
  return res.send("RAW MTL FILE");
};

const getObjectOBJ = async (req, res) => {
  res.type("text/plain");
  return res.send("RAW OBJ FILE");
};

const getObjectImage = async (req, res) => {
  res.type("image/jpg");
  res.sendFile("3d_model.jpg", { root: __dirname });
};

module.exports = {
  getViewerExplanation,
  getObjectMTL,
  getObjectOBJ,
  getObjectImage,
};
