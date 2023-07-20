const {
  getPostsController,
  createPostController,
  updatePostController,
} = require("../controllers/post.controllers");
const express = require("express");

const postRouter = express.Router();

postRouter.get("/posts", getPostsController);

postRouter.post("/posts", createPostController);

postRouter.post("/posts/:id", updatePostController);

module.exports = postRouter;
