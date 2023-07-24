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
import { deletePost, updatePost } from "../lib";
import { DELETE_POST, UPDATE_POST } from "../actions";

const PostCard = ({ post }) => {
  const {
    appState: { userId },
    appDispatch,
  } = useAppContext();

  const handlePostLike = async (post) => {
    appDispatch({
      type: UPDATE_POST,
      payload: { id: post._id, likers: [userId, ...post.likers] },
    });
    await updatePost({ ...post, likers: [userId, ...post.likers] });
  };

  const handleDeletePost = async (id) => {
    const posts = await deletePost(id);
    appDispatch({
      type: DELETE_POST,
      payload: { posts },
    });
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
            <MDBIcon size="lg" fas icon="heart" color="danger" />
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
        <MDBIcon
          icon="fas fa-trash-can"
          color="danger"
          className="likeBtn"
          onClick={() => handleDeletePost(post._id)}
        />
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PostCard;
