import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer } from "../reducer";

const initialState = {
  userId: "",
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
    const initialPosts = "";
  }, [userId]);

  return (
    <AppContext.Provider
      value={{ appState, appDispatch }}
    ></AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default AppProvider;
