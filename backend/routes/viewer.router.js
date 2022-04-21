const express = require("express");
const viewerRouter = express.Router();

const {
  getViewerExplanation,
  getObjectMTL,
  getObjectOBJ,
  getObjectImage,
} = require("../controllers/viewer.controller");

viewerRouter.get("/", getViewerExplanation);
viewerRouter.get("/:name", getViewerExplanation);

viewerRouter.get("/:name/mtl", getObjectMTL);
viewerRouter.get("/:name/obj", getObjectOBJ);
viewerRouter.get("/:name/image", getObjectImage);

// viewerRouter.get("/:id", getSymptom);
// viewerRouter.post("/", setSymptoms);
// viewerRouter.put("/:id", updateSymptom);
// viewerRouter.delete("/:id", deleteSymptom);

module.exports = viewerRouter;
