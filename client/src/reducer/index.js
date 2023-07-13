import { GET_POST, GET_POST_STREAM, POST_REACTION } from "../actions";

export const appReducer = (state, action) => {
  switch (action.type) {
    case GET_POST:
      const { data, error } = action.payload;
      return { ...state, posts: data, isLoading: false, isError: error };
    case GET_POST_STREAM:
      break;
    case POST_REACTION:
      break;
    default:
      return state;
  }
};
