import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Join Controllers
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    return res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

// Login Controllers
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

// GitHub Controllers
export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
  const {
    _json: { id, email, name, avartar_url: avatarUrl },
  } = profile;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        avatarUrl,
        githubId: id,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

// Logout Controller
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

// User Controllers
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "ChangePassword" });
