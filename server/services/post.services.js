const { PostModel } = require("../models/post");

const getPostsService = async () => {
  try {
    const posts = await PostModel.find();
    const postLength = posts.length;
    message = postLength ? "success" : "Not Found";
    statusCode = postLength ? 200 : 404;
    error = postLength ? false : true;
    return { data: posts, message, statusCode, error };
  } catch (error) {
    return {
      data: [],
      message: error.message ?? "Sorry an error occurred",
      error: true,
      statusCode: 500,
    };
  }
};

const createPostService = async (post) => {
  try {
    const result = await PostModel.create(post);
    return { data: result, error: false, message: "success", statusCode: 200 };
  } catch (error) {
    return {
      data: [],
      message: error.message ?? "Sorry an error occurred",
      error: true,
      statusCode: 500,
    };
  }
};

module.exports = {
  getPostsService,
  createPostService,
};
