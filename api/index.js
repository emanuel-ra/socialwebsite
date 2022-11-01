import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";

import usersRoutes from "./Routes/users.js"
import commentsRoutes from "./Routes/comments.js"
import postsRoutes from "./Routes/posts.js"
import likesRoutes from "./Routes/likes.js"
import authRoutes from "./Routes/auth.js"


const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use("/api/users",usersRoutes);
app.use("/api/comments",commentsRoutes);
app.use("/api/posts",postsRoutes);
app.use("/api/likes",likesRoutes);
app.use("/api/auth",authRoutes);

app.listen(8800, () => {
    console.log("API WORKING!")
});