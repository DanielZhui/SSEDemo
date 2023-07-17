import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBSpinner,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useAppContext } from "../context";
import { createPost } from "../lib";

const AddPostModel = ({ isOpen, toggleShow }) => {
  const {
    appState: { userId },
  } = useAppContext();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setImage("");
    setContent("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      return setMessage("All input are required");
    }
    try {
      setLoading(true);
      const res = await createPost({ title, photo: image, userId, content });
      setMessage(res.message);
      resetForm();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <MDBModal show={isOpen} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Add New Post</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className="mb-2">
                <label htmlFor="title">Post Title</label>
                <MDBInput
                  value={title}
                  onChange={handleTitle}
                  placeholder="Post Title"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="image">Post Image Link</label>
                <MDBInput
                  value={image}
                  onChange={handleImage}
                  placeholder="Post Image Link"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="title">Post Content</label>
                <MDBInput
                  value={content}
                  onChange={handleContent}
                  placeholder="Post Content"
                />
              </div>
              <div className="d-block text-center">
                <p className="info">{message}</p>
                {loading && <MDBSpinner />}
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn onClick={handleSubmit} disabled={loading}>
              Submit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default AddPostModel;
