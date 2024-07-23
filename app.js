// src/App.js
import React, { useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300/111',
    'https://via.placeholder.com/300/222',
    'https://via.placeholder.com/300/333',
    'https://via.placeholder.com/300/444',
  ];

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={() =>
            setSelectedImage(
              images[(images.indexOf(selectedImage) - 1 + images.length) % images.length]
            )
          }
          onNext={() =>
            setSelectedImage(
              images[(images.indexOf(selectedImage) + 1) % images.length]
            )
          }
        />
      )}
    </div>
  );
};

export default App;
