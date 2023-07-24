import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducer";
import { nanoid } from "nanoid";
import { getPosts } from "../lib";
import { CREATE_POST, GET_POST, UPDATE_POST } from "../actions";
import { ssEvents } from "../config";

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
      appDispatch({ type: GET_POST, payload: result });
    };
    getFetchPosts();

    ssEvents.addEventListener("create", (e) => {
      const data = JSON.parse(e.data);
      appDispatch({ type: CREATE_POST, payload: data });
    });

    ssEvents.addEventListener("update", (e) => {
      const data = JSON.parse(e.data);
      appDispatch({
        type: UPDATE_POST,
        payload: { id: data._id, likers: data.likers },
      });
    });
  }, [userId]);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
