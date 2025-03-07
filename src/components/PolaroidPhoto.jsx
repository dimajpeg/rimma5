// src/components/PolaroidPhoto.jsx
import React from 'react';
import './PolaroidPhoto.css';  // Импортируем стиль для фото

const PolaroidPhoto = () => {
    return (
        <div className="polaroid">
            <img src="pal.JPG" alt="Фото с ней" className="polaroid-img" />
        </div>
    );
};

export default PolaroidPhoto;
