import "./App.css";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useState } from "react";
import Posts from "./components/Posts";
import { useAppContext } from "./context";
import AddPostModel from "./components/AddPostModel";

function App() {
  const {
    appState: { isError },
  } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleShow = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex justify-content-between">
          <h2>SSE Realtime NewsFeed</h2>
          <MDBBtn onClick={() => toggleShow()}>Add Post</MDBBtn>
        </div>
      </header>
      {!isError && (
        <h2 className="mt-3 mb-3">
          Open this aoo in a new tab or windows and try to add new post or like
          a post and see the real-time functionality in action.
        </h2>
      )}
      <MDBContainer>
        <Posts />
      </MDBContainer>
      <AddPostModel isOpen={isOpen} toggleShow={toggleShow} />
    </div>
  );
}

export default App;
