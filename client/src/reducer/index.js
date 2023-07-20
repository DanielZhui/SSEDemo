import { GET_POST, GET_POST_STREAM, UPDATE_POST } from "../actions";

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
    default:
      return state;
  }
};
