import "./db";
import app from "./app";
import dotenv from "dotenv";
import Video from "./models/Video";
import Comment from "./models/Comment";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = (req, res) => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
