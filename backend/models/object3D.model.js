const mongoose = require("mongoose");

const object3DSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an object name"],
    },
    full_description: {
      type: String,
      required: [true, "Please add a description"],
    },
    short_description: {
      type: String,
      required: [true, "Please add an obj file name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", object3DSchema);
