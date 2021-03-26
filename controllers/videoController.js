import { videos } from "../db";
import routes from "../routes";

// Global Controller
export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  console.log(req.query);
  const {
    query: { term: searchingBy },
  } = req;
  console.log(searchingBy);
  return res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Video Controller
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  // console.log(req.body);
  const { 
    body: {file, title, description} 
  } = req;
  res.redirect(routes.videoDetail(100));
}
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo" });
