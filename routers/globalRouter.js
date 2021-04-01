import express from "express";
import { getJoin, getLogin, postLogin, logout, postJoin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

export default globalRouter;
