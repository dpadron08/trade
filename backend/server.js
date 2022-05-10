const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const viewerRouter = require("./routes/viewer.router");

dotenv.config();

const app = express();
const port = process.env.PORT || 8002;
//const port = 8002;
console.log("Using port: " + port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", () => console.log("database connection failed"));
db.once("open", () => console.log("database connection successful"));

app.use("/api/viewer", viewerRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.type("text/plain");
    res.send(
      'Welcome to the Trade backend, please send requests to "api/viewer/{object}/{mtl|obj|jpg}"'
    );
  });
}

app.listen(port, () => {
  console.log("App is running on port " + port);
});
