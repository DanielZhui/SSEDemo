const {
  getPostsController,
  createPostController,
} = require("../controllers/post.controllers");
const express = require("express");

const postRouter = express.Router();

postRouter.get("/posts", getPostsController);

postRouter.post("/posts", createPostController);

module.exports = postRouter;
