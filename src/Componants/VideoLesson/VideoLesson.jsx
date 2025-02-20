import React from 'react';
import './videoLeson.css';
import { Link } from 'react-router-dom';

const VideoLesson = () => {
    return (
        <div className="lesson-container">

            <header className="header">
                <Link to="/level"><button className="back-button">&#8592;</button></Link>
            </header>


            <div className="video-section">
                <iframe
                    className="video-embed"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0&showinfo=0&controls=1"
                    title="Lesson Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                    allowFullScreen
                    
                ></iframe>

            </div>

            {/* Unlock Info */}
            <p className="unlock-info">
                Unlock the next lesson by watching 75% of this video!
            </p>

            {/* Lesson Title */}
            <h2 className="lesson-title">Input Vs. Output</h2>

            {/* Lesson Description */}
            <p className="lesson-description">
                Explore the difference between input and output in language learning
                and how both are essential for fluency.
            </p>

            {/* Buttons */}
            <div className="button-group">
                <button className="action-button download-button">
                    <span>&#8681;</span> Download
                </button>
                <button className="action-button doubts-button">
                    <span>?</span> Doubts
                </button>
            </div>
        </div>
    );
};

export default VideoLesson;
