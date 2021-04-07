import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  User.findById(id, (err, user)=>{
    done(err, user);
  })
});