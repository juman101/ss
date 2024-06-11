import React, { useState } from 'react';
import './App.css';
import ImageQualitySelector from './components/ImageQualitySelector';

import img144p from './assets/images/144p-image.jpg';
import img360p from './assets/images/360p-image.jpg';
import img720p from './assets/images/720p-image.jpg';
import img1080p from './assets/images/1080p-image.jpg';
import heartImage from './assets/heart.png'; // Import the heart image

function App() {
    const options = [
        { value: '144p', label: '144p Quality' },
        { value: '360p', label: '360p Quality' },
        { value: '720p', label: '720p Quality' },
        { value: '1080p', label: '1080p Quality' }
    ];

    const images = {
        '144p': img144p,
        '360p': img360p,
        '720p': img720p,
        '1080p': img1080p
    };

    const [selectedQuality, setSelectedQuality] = useState(null);

    const handleQualityChange = (quality) => {
        setSelectedQuality(quality);
    };

    return (
        <div className="App" style={{ backgroundImage: selectedQuality === '1080p' ? `url(${heartImage})` : null }}>
            <header className="App-header">
                <h1> My World</h1>
                <ImageQualitySelector options={options} images={images} onChange={handleQualityChange} />
            </header>
        </div>
    );
}

export default App;
