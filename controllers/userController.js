// Global Controller
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  console.log(req.body);
  return res.render("join", { pageTitle: "Join" });
};
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });

// User Controller
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "ChangePassword" });
