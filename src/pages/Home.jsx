// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <motion.div
                className="heart"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                ❤️
            </motion.div>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="glowing-text"
            >
                С 8 марта, дорогая Римма! 💖
            </motion.h1>
            <Link to="/page2" className="next-button">➡️</Link>
        </div>
    );
};

export default Home;