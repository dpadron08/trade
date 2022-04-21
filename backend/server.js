const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const viewerRouter = require("./routes/viewer.router");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", () => console.log("database connection failed"));
db.once("open", () => console.log("database connection successful"));

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send(
    'Welcome to the Trade backend, please send requests to "api/viewer/{object}/{mtl|obj|jpg}"'
  );
});

app.use("/api/viewer", viewerRouter);

app.listen(port, () => {
  console.log("App is running on port " + port);
});
