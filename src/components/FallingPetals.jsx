// src/components/FallingPetals.jsx
import React, { useEffect, useState } from "react";
import "./styles.css";

const FallingPetals = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const newPetals = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: Math.random() * 3 + 2
        }));
        setPetals(newPetals);
    }, []);

    return (
        <div className="falling-petals">
            {petals.map(petal => (
                <div
                    key={petal.id}
                    className="petal"
                    style={{left: `${petal.left}%`, animationDuration: `${petal.duration}s`}}
                >
                    🌸
                </div>

            ))}
        </div>
    );
};

export default FallingPetals;