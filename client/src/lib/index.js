import { Axios } from "../config";

export const getPosts = async () => {
  try {
    const {
      data: { data = [] },
    } = await Axios.get("/posts");
    return { data, error: false };
  } catch (error) {
    return { data: [], error: true };
  }
};

export const createPost = async (body) => {
  try {
    const {
      data: { data = {}, message, error },
    } = await Axios.post("/posts", body);
    return { data, message, error };
  } catch (error) {
    return { data: [], message: error.message, error: true };
  }
};

export const updatePost = async (post) => {
  try {
    const {
      data: { data = [], message, error },
    } = await Axios.post(`/posts/${post._id}`, {
      userIds: post.likers,
    });
    return { data, message, error };
  } catch (error) {
    return {
      data: [],
      message: error.message ?? "Update post error",
      error: true,
    };
  }
};

export const deletePost = async (id) => {
  try {
    const {
      data: { data = [], message, error },
    } = await Axios.delete(`/posts/${id}`);
    return { data, message, error };
  } catch (error) {
    return {
      data: [],
      message: error.message ?? "Update post error",
      error: true,
    };
  }
};
