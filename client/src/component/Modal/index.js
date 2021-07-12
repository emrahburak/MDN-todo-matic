import React from "react";

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return (
    <div>
      <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="modalWrap">
        <div className="modal">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
