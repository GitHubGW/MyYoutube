import routes from "../routes";
import Video from "../models/Video";

// Global Controller
export const home = async (req, res) => {
  try{
    const videos = await Video.find({});
    // throw Error("Error!!!");
    return res.render("home", { pageTitle: "Home", videos });
  }catch(error){
    console.log(error);
    return res.render("home", { pageTitle: "Home", videos: [] });
  }
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
export const postUpload = async (req, res) => {
  // console.log(req.body);
  const { 
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  return res.redirect(routes.videoDetail(newVideo.id));
}
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo" });
