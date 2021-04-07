import "./db";
import dotenv from "dotenv";
import app from "./app";
import Video from "./models/Video";
import Comment from "./models/Comment";
import User from "./models/User";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = (req, res) => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
