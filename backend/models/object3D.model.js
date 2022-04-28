const mongoose = require("mongoose");

const object3DSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an object name"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    obj_file: {
      type: String,
      required: [true, "Please add an obj file name"],
    },
    mtl_file: {
      type: String,
      required: [true, "Please add an mtl file name"],
    },
    image_file: {
      type: String,
      required: [true, "Please add an image file name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Object3D", object3DSchema);
