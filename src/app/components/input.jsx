'use client';
import { useState } from "react";

const Input = ({ colorinput, setColorinput }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleClear = () => {
        setColorinput('');
    };

    const suggestedColors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', '#ff6b6b', '#4ecdc4', '#45b7d1'];

    const handleSuggestionClick = (color) => {
        setColorinput(color);
    };

    return (
        <div className="input-container">
            <form onSubmit={(e) => e.preventDefault()} className="input-form">
                <div className={`input-wrapper ${isFocused ? 'focused' : ''}`}>
                    <label htmlFor="colorname" className="input-label">
                        Color Name or Code
                    </label>
                    <div className="input-field-container">
                        <input 
                            id="colorname" 
                            autoFocus 
                            type="text" 
                            placeholder="e.g., red, #ff0000, rgb(255,0,0)" 
                            value={colorinput} 
                            onChange={(e) => setColorinput(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="color-input"
                        />
                        {colorinput && (
                            <button 
                                type="button" 
                                onClick={handleClear}
                                className="clear-button"
                                aria-label="Clear input"
                            >
                                ×
                            </button>
                        )}
                    </div>
                </div>
            </form>
            
            <div className="suggestions">
                <p className="suggestions-label">Try these:</p>
                <div className="suggestions-grid">
                    {suggestedColors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => handleSuggestionClick(color)}
                            className="suggestion-chip"
                            style={{ 
                                backgroundColor: color,
                                color: ['red', 'blue', 'green', 'purple'].includes(color) ? 'white' : 'inherit'
                            }}
                        >
                            {color}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Input;