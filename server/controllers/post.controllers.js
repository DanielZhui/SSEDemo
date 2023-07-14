const {
  createPostService,
  getPostsService,
} = require("../services/post.services");

const getPostsController = async (req, res) => {
  const result = await getPostsService();
  res.status(result.statusCode).json(result);
};

const createPostController = async (req, res) => {
  const body = req.body;
  const result = await createPostService(body);
  res.status(result.statusCode).json(result);
};

module.exports = {
  getPostsController,
  createPostController,
};
