const express = require("express");
const app = express();
const path = require("node:path");
const newMessageRouter = require("./routes/newMessageRouter");
const homeRouter = require("./routes/homeRouter");
const assetsPath = path.join(__dirname, "public");
const editRouter = require("./routes/editRouter");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", homeRouter);
app.get("/new", newMessageRouter);
app.post("/new", newMessageRouter);
app.get("/message/:id", editRouter);
app.listen(3000, () => {
  console.log("server is up and running");
});
