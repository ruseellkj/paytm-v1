// this is the second entry point | bascially import all the libraries

import express from "express";
import cors from "cors";
import { Router } from "express";
const router = Router();

const app = express();
// use method is mostly used for middlewares and to config
app.use(cors());

// middleware need to use before all things
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// router import
import rootRouter from "./routes/root.routes.js"
import userRouter from "./routes/user.routes.js"
import accountRouter from "./routes/account.routes.js"


// routes declaration -> always middleware is used here (syntax)
app.use("/api/v1",rootRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/account",accountRouter);
router.use("/user", userRouter);
router.use("/account", accountRouter);

export default app;
