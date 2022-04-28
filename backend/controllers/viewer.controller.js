const Object3D = require("../models/object3D.model");

// @desc    Get a list of all the objects
// @route   GET /api/viewer/
// @access  Public
const getAllObjectData = async (req, res) => {
  const items = await Object3D.find();
  return res.send({ items: items });
};

// @desc    Get all the data for a particular object
// @route   GET /api/viewer/:object_name
// @access  Public
const getObjectData = async (req, res) => {
  const object_name = req.params.name;
  const item = await Object3D.find({ name: object_name });
  return res.send({
    items: item,
  });
};

module.exports = {
  getAllObjectData,
  getObjectData,
};
