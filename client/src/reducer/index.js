import {
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POST_STREAM,
  UPDATE_POST,
} from "../actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case GET_POST:
      const { data, error } = action.payload;
      return { ...state, posts: data, isLoading: false, isError: error };
    case GET_POST_STREAM:
      break;
    case UPDATE_POST:
      const posts = state.posts.map((p) =>
        p._id === action.payload.id
          ? { ...p, likers: action.payload.likers }
          : p
      );
      return {
        ...state,
        posts,
      };
    case DELETE_POST:
      const dPost = action.payload.posts;
      return {
        ...state,
        posts: dPost.data,
      };
    case CREATE_POST:
      const cPost = action.payload;
      return {
        ...state,
        posts: [...state.posts, cPost],
      };
    default:
      return state;
  }
};
