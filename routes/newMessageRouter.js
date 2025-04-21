import { Router } from "express";

const newMessageRouter = (messages) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.render("form"); // renders the 'form' template
  });

  router.post("/", (req, res) => {
    const { name: user, message: text } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect("/"); // Redirect to index page after submission
  });

  return router;
};

export default newMessageRouter;
