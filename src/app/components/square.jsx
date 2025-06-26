
'use client';
import { useState, useEffect } from "react";

const Square = ({ colorinput }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentColor, setCurrentColor] = useState('');

    useEffect(() => {
        if (colorinput !== currentColor) {
            setIsAnimating(true);
            
            // Delay color change for smooth animation
            const timer = setTimeout(() => {
                setCurrentColor(colorinput);
                setIsAnimating(false);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [colorinput, currentColor]);

    return (
        <div className="square-container">
            <div 
                className={`square-section ${isAnimating ? 'color-animate' : ''}`}
                style={{ 
                    backgroundColor: currentColor || '#6366f1'
                }}
            >
                <div className="square-content">
                    <p className="color-text">
                        {currentColor || "Enter a color..."}
                    </p>
                </div>
            </div>
            <div className="color-info">
                <span className="color-label">Current Color:</span>
                <span className="color-value">{currentColor || "None"}</span>
            </div>
        </div>
    );
};

export default Square;