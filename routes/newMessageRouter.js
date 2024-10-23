const routes = require("express");
const newMessageRouter = routes.Router();
const { messages } = require("./messages");
newMessageRouter.get("/new", (req, res) => {
  res.render("form");
});
newMessageRouter.post("/new", (req, res) => {
  console.log(req.body.name);

  messages.push({ user: req.body.name, text: req.body.msg, added: new Date() });
  res.redirect("./");
});
module.exports = newMessageRouter;
