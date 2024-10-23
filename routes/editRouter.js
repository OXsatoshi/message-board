const routes = require("express");
const editRouter = routes.Router();
const { messages } = require("./messages");

editRouter.get("/message/:id", (req, res) => {
  console.log("edit");
  const id = req.params.id;
  const message = messages[id];
  res.render("edit", message);
});
module.exports = editRouter;
