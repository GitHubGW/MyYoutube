import express from "express";
import { getJoin, getLogin, postLogin, logout, postJoin, githubLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);

// Github
globalRouter.get(routes.github, githubLogin);

export default globalRouter;
