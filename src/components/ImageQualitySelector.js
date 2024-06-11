import React, { useState } from 'react';

const ImageQualitySelector = ({ options, images }) => {
    const [selectedQuality, setSelectedQuality] = useState(options[0].value);
    const [showNote, setShowNote] = useState(false);

    const handleChange = (event) => {
        setSelectedQuality(event.target.value);
        setShowNote(false); // Reset the note display when changing the quality
        if (event.target.value === '1080p') {
            document.body.classList.add('blue-background');
        } else {
            document.body.classList.remove('blue-background');
        }
    };

    const handleButtonClick = () => {
        setShowNote(true);
    };

    return (
        <div>
            <label htmlFor="quality-select">Select Image Quality: </label>
            <select id="quality-select" onChange={handleChange} value={selectedQuality}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="image-container">
                <img src={images[selectedQuality]} alt={selectedQuality} />
            </div>
            {selectedQuality === '1080p' && (
                <div>
                    <button onClick={handleButtonClick}>Show Note</button>
                    {showNote && (
                        <p style={{ 
                            width: '400px',
                            backgroundColor: 'pink',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            marginTop: '10px',
                            color: '#fff', // Change text color to white for better visibility
                            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' // Add shadow to text
                        }}>
                            Hi Shriya, I know you are feeling very low and sick too, and adding to that, I made you feel more sad!  
                            I want to apologize for all the tiny and massive things that contributed to making you feel low. 
                            I truly never intend to hurt you. I care deeply about your health and emotional well-being, 
                            but sometimes I get upset too. I'm sorry I made you feel this way. Please call me. I love you.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageQualitySelector;
