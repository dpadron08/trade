const Object3D = require("../models/object3D.model");

const getAllObjectData = async (req, res) => {
  const items = await Object3D.find();
  return res.send({ items: items });
};

const getObjectData = async (req, res) => {
  const object_name = req.params.name;
  console.log(object_name);
  const item = await Object3D.find({ name: object_name });
  return res.send({
    items: item,
  });
};

module.exports = {
  getAllObjectData,
  getObjectData,
};
