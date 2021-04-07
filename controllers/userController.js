import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Global Controller
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
    try{
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    }catch(error){
      console.log(error);
      res.redirect(routes.home);
    }

  }
};

// Login Controller
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });


export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const logout = (req, res) => res.redirect(routes.home);

// User Controller
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "ChangePassword" });
