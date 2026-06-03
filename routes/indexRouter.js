const {Router} = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
})

indexRouter.get("/new", (req, res) => {
    res.render("form");
})

indexRouter.post("/new", (req, res) => {
  //in form.ejs we are asking for user and text input which we save in "user" & "text" then push into our messages array
  const { user, text} = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/")
})

indexRouter.get("/messages/:id", (req, res) => {
    const message = messages[req.params.id];
    res.render("message", { message });
})

module.exports = indexRouter;