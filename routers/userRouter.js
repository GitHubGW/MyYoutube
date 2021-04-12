import express from "express";
import { getChangePassword, postChangePassword, getEditProfile, postEditProfile, userDetail } from "../controllers/userController";
import { onlyPrivate, uploadVideo } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();


userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadVideo, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
