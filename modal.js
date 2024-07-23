// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose, onPrev, onNext }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image} alt="Selected" />
        <div className="navigation">
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
