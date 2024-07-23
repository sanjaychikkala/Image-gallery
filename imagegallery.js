// src/components/ImageGallery.js
import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
