import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducer";
import { nanoid } from "nanoid";
import { getPosts } from "../lib";
import { GET_POST } from "../actions";

const initialState = {
  userId: nanoid(),
  posts: [],
  isLoading: true,
  isError: false,
};

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
  const [appState, appDispatch] = useReducer(appReducer, initialState);
  const { userId } = appState;

  useEffect(() => {
    // fetch initial posts
    const getFetchPosts = async () => {
      const result = await getPosts();
      console.log("result???", result);
      appDispatch({ type: GET_POST, payload: result });
    };
    getFetchPosts();
  }, [userId]);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
