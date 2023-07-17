import { MDBBtn, MDBModal } from "mdb-react-ui-kit";
import React from "react";

const AddPostModel = ({ isOpen, toggleShow }) => {
  return (
    <MDBModal show={isOpen}>
      <div>add posts</div>
      <MDBBtn className="btn-close" color="none" onClick={toggleShow}>
        click
      </MDBBtn>
    </MDBModal>
  );
};

export default AddPostModel;
