import routes from "../routes";
import Video from "../models/Video";

// Global Controller
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({
      _id: -1,
    });
    // throw Error("Error!!!");

    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    return res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // console.log(searchingBy);

  let videos = [];
  try{
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  }catch(error){
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Video Controller(get, post)
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  // console.log(req.body);
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  return res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  // console.log(req.params);

  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    // console.log(video);
    return res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    return res.redirect(routes.home);
  }
};

// Edit Controller(get, post)
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  // console.log(id);

  try {
    const video = await Video.findById(id);
    // console.log(video);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    await Video.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
      }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console(error);
    res.redirect(routes.home);
  }
};

// Delete Controller
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
