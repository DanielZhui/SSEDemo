import React from "react";
import { createContext } from "react";

const initialState = {
  userId: "",
  posts: [],
  isLoading: true,
  isError: false,
};

export const AppContext = createContext(initialState);

const Posts = () => {
  return <div>This is posts </div>;
};

export default Posts;
