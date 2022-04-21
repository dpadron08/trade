const mongoose = require("mongoose");

const object3DSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an object name"],
    },
    obj_file: {
      type: String,
      required: [true, "Please add an obj file"],
    },
    mtl_file: {
      type: String,
      required: [true, "Please add an mtl file"],
      unique: true,
    },
    image_file: {
      type: mongoose.Schema.Types.Buffer,
      required: [true, "Please add an image file"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Object3D", object3DSchema);
