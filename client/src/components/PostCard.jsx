import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useAppContext } from "../context";

const PostCard = ({ post }) => {
  const {
    appState: { userId },
    appDispatch,
  } = useAppContext();
  return (
    <MDBCard>
      <div>post card</div>
      <MDBCardImage src={post.photo} />
      <MDBCardBody>
        <MDBCardTitle>{post.title}</MDBCardTitle>
        <MDBCardSubTitle>{post.content}</MDBCardSubTitle>
      </MDBCardBody>
      <MDBCardFooter></MDBCardFooter>
    </MDBCard>
  );
};

export default PostCard;
