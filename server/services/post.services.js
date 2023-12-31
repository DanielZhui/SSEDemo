const { PostModel } = require("../models/post");
const { ObjectId } = require("mongodb");

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
      data: {},
      message: error.message ?? "Sorry an error occurred",
      error: true,
      statusCode: 500,
    };
  }
};

const updatePostService = async (id, userIds) => {
  try {
    await PostModel.findByIdAndUpdate(id, {
      likers: userIds,
    });
    const result = await PostModel.findById(id);
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

const deletePostService = async (id) => {
  try {
    const objectId = new ObjectId(id);
    await PostModel.findByIdAndDelete(objectId);
    return await getPostsService();
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
  updatePostService,
  deletePostService,
};
