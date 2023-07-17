import React from "react";
import PostCard from "./PostCard";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useAppContext } from "../context";

const Posts = () => {
  const {
    appState: { posts, isError, isLoading },
  } = useAppContext();
  return (
    <MDBRow>
      {posts.map((p) => (
        <MDBCol>
          <PostCard post={p} />
        </MDBCol>
      ))}
    </MDBRow>
  );
};

export default Posts;
