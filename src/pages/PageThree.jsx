// src/pages/PageThree.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PageThree.css';  // Добавим внешний CSS файл для стилей

const PageThree = () => {
    return (
        <div className="page-container">
            <motion.div
                className="text-container"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
            >
                <motion.h2
                    animate={{ x: [0, -20, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.5 }}
                    className="text-row"
                >
                    Ты — невероятная,
                </motion.h2>
                <motion.h2
                    animate={{ x: [0, 20, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.5 }}
                    className="text-row"
                >
                    и я безумно рад,
                </motion.h2>
                <motion.h2
                    animate={{ x: [0, -20, 0], opacity: [0, 1] }}
                    transition={{ duration: 1.5 }}
                    className="text-row"
                >
                    что могу быть рядом с тобой!
                </motion.h2>
            </motion.div>

            <motion.div
                className="flowers"
                animate={{ x: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                🌸🌸🌸
            </motion.div>

            <motion.div
                className="hearts"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                ❤️❤️❤️
            </motion.div>

            <Link to="/final" className="next-button">➡️</Link>
        </div>
    );
};

export default PageThree;
