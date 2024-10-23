const routes = require("express");
const homeRouter = routes.Router();
const { messages } = require("./messages");

homeRouter.get("/", (req, res) => {
  const formattedMessages = messages.map((message) => {
    const formattedDate = message.added.toLocaleString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return { ...message, formattedDate };
  });
  res.render("index", { formattedMessages });
});
module.exports = homeRouter;
