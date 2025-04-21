import { Router } from "express";

const indexRouter = (messages) => {
  const router = Router();

  router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
  });
  return router;
};

export default indexRouter;
