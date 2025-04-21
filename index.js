import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import messages from "./data/data.js";

const app = express();
const PORT = 4000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join("views"));
app.set("view engine", "ejs");

app.use("/", indexRouter(messages));
app.use("/new", newMessageRouter(messages));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
