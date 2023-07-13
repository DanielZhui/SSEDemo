import "./App.css";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useState } from "react";
import Posts from "./components/Posts";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <div>
          <h2>SSE Realtime NewsFeed</h2>
        </div>
        <MDBBtn>Add Post</MDBBtn>
      </header>
      <MDBContainer>
        <Posts />
      </MDBContainer>
    </div>
  );
}

export default App;
