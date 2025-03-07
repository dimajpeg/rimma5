// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import FinalPage from './pages/FinalPage';

import { motion } from 'framer-motion';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Home /></motion.div>} />
                <Route path="/page2" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><PageTwo /></motion.div>} />
                <Route path="/page3" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><PageThree /></motion.div>} />
                <Route path="/final" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><FinalPage /></motion.div>} />
            </Routes>
        </Router>
    );
}


export default App;
