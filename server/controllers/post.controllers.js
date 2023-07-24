const {
  createPostService,
  getPostsService,
  updatePostService,
  deletePostService,
} = require("../services/post.services");
const sse = require("../sse");

const getPostsController = async (req, res) => {
  const result = await getPostsService();
  res.status(result.statusCode).json(result);
};

const createPostController = async (req, res) => {
  const body = req.body;
  const result = await createPostService(body);
  res.status(result.statusCode).json(result);
  if (!result.error) {
    sse.send(result.data, "create");
  }
};

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { userIds } = req.body;
  const result = await updatePostService(id, userIds);
  if (!result.error) {
    sse.send(result.data, "update");
  }
  res.status(result.statusCode).json(result);
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const result = await deletePostService(id);
  res.status(result.statusCode).json(result);
};

module.exports = {
  getPostsController,
  createPostController,
  updatePostController,
  deletePostController,
};
