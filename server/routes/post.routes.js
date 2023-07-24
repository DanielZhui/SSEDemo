const {
  getPostsController,
  createPostController,
  updatePostController,
  deletePostController,
} = require("../controllers/post.controllers");
const express = require("express");

const postRouter = express.Router();

postRouter.get("/posts", getPostsController);

postRouter.post("/posts", createPostController);

postRouter.post("/posts/:id", updatePostController);

postRouter.delete("/posts/:id", deletePostController);

module.exports = postRouter;
