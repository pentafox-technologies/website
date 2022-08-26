import React from "react";
import {
  ModalBackdrop,
  ModalBody,
  ModalContainer,
  ModalHeader,
} from "./Modal.css";

const Modal = ({ open, title, onClose, children }) => {
  if (!open) {
    return null;
  }

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <h1>{title}</h1>
          <span onClick={onClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
