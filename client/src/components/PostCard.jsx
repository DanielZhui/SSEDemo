import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useAppContext } from "../context";

const PostCard = ({ post }) => {
  const {
    appState: { userId },
    appDispatch,
  } = useAppContext();

  const handlePostLike = async (post) => {
    //
  };

  return (
    <MDBCard className="h-100">
      <MDBCardImage
        src={post.photo}
        position="top"
        style={{ maxHeight: 350, objectFit: "cover" }}
      />
      <MDBCardBody>
        <MDBCardTitle>{post.title}</MDBCardTitle>
        <MDBCardSubTitle style={{ maxWidth: "100%" }}>
          {post.content}
        </MDBCardSubTitle>
      </MDBCardBody>
      <MDBCardFooter>
        {post.likers.includes(userId) ? (
          <>
            {post.likers.length}
            <MDBIcon
              className="likeBtn"
              size="lg"
              fas
              icon="heart"
              color="danger"
            />
          </>
        ) : (
          <>
            {post.likers.length}
            <MDBIcon
              className="likeBtn"
              size="lg"
              far
              icon="heart"
              onClick={() => handlePostLike(post)}
            />
          </>
        )}
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PostCard;
