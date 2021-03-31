import routes from "../routes";
import Video from "../models/Video";

// Global Controller
export const home = async (req, res) => {
  try{
    const videos = await Video.find({});
    // throw Error("Error!!!");

    console.log(videos);
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
export const videoDetail = async (req, res) => {
  // console.log(req.params);

  const {
    params: {id}
  }=req;
  try{
    const video = await Video.findById(id);
    // console.log(video);
    return res.render("videoDetail", { pageTitle: "VideoDetail", video });
  }catch(error){
    console.log(error);
    return res.redirect(routes.home);
  }

}
export const getEditVideo = async (req, res) => {
    const {
    params: {id}
  } = req;
  console.log(id);

  try{
    const video = await Video.findById(id);
    // console.log(video);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }

}
export const postEditVideo = async (req, res) => {
  const {
    params: {id},
    body: {title, description}
  } = req;

  try{
    await Video.findOneAndUpdate({_id: id},{
      title,
      description
    });
    res.redirect(routes.videoDetail(id));
  }catch(error){
    console(error);
    res.redirect(routes.home);
  }
}

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo" });
