import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log("⏺",req.user);
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
