import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FinalPage.css';  // Не забудь подключить внешний CSS

const FinalPage = () => {
    const [showHug, setShowHug] = useState(false);

    const handleHugClick = () => {
        setShowHug(true);
        setTimeout(() => {
            setShowHug(false);
        }, 3000); // Эффект будет длиться 3 секунды
    };

    return (
        <div className="page-container">
            {/* Текст "Я тебя люблю!" */}
            <motion.h2
                animate={{ opacity: [0, 1], scale: [0.5, 1] }}
                transition={{ duration: 2 }}
                className="universe-text"
            >
                Я тебя люблю!
            </motion.h2>

            {/* Кнопка "Обнимаю" */}
            <motion.button
                className="hug-button"
                onClick={handleHugClick}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)" }}
                whileTap={{ scale: 0.9 }}
            >
                обнимаю
            </motion.button>

            {/* Разлетающиеся маленькие смайлики "Обнимашки" */}
            {showHug && (
                <div className="hug-smileys-container">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="hug-smiley"
                            initial={{ opacity: 1, scale: 0.5 }}
                            animate={{
                                opacity: 0,
                                x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200],
                                y: [0, Math.random() * -400, Math.random() * 400],
                                scale: [0.5, 1.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                                delay: Math.random() * 0.5,
                                opacity: { duration: 0.5, ease: "easeIn" },
                            }}
                        >
                            🫂
                        </motion.div>
                    ))}
                </div>
            )}

            <Link to="/" className="next-button">⬅️ На главную</Link>
        </div>
    );
};

export default FinalPage;
