import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  res.locals.routes = routes;
  next();
};
