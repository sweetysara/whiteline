import React from 'react';
import './pageheader.css';
import profilePhoto from '../assets/images/image.jpeg'; // Ensure this path is correct

function PHeader() {
    return (
        <header className="pages-header">
            <h1>WELCOME TO <span>247 FLEET MANAGER</span></h1>
            <div className="pages-search-container">
                <input className="pages-search-input" type="text" placeholder="SEARCH" />
            </div>
            <div className="pages-icons-container">
                <i className="fas fa-exclamation-circle"></i>
                <i className="fas fa-comment-dots"></i>
            </div>
            <div className="pages-vertical-line"></div>
            <div className="pages-profile-container">
                <img src={profilePhoto} alt="Profile" className="pages-profile-photo" />
            </div>
        </header>
    );
}

export default PHeader;
