import { Axios } from "../config";

export const getPosts = async () => {
  try {
    const { data = [] } = await Axios.get("/post");
    return { data, error: false };
  } catch (error) {
    return { data: [], error: true };
  }
};

export const createPost = async (body) => {
  try {
    const { data = [], message, error } = await Axios.post("/posts", body);
    return { data, message, error };
  } catch (error) {
    return { data: [], message: error.message, error: true };
  }
};
