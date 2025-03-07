// src/pages/PageTwo.jsx
import React from 'react';
import PolaroidPhoto from '../components/PolaroidPhoto'; // Путь к компоненту с фото
import { Link } from 'react-router-dom';

const PageTwo = () => {
    return (
        <div className="page-container">
            <PolaroidPhoto />
            <h2>Ты — моя любимка!</h2>
            <div className="heart-animation">❤️</div>
            <Link to="/page3" className="next-button">➡️</Link>
        </div>
    );
};

export default PageTwo;
