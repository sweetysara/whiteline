import React from 'react';
import './header.css';
import profilePhoto from '../assets/images/image.jpeg'; // Ensure this path is correct
import carSideIcon from '../assets/images/car-side-svgrepo-com.svg';
import carService from '../assets/images/car-service-icon.svg';
function Header() {
    return (
        <header className="header">
            <h1>Welcome to 247 Fleet Manager</h1>
            <div className="search-container">
                <input type="text" placeholder="Search" />
            </div>
            <div className="profile-container">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
            </div>
            <div className="stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Number of Trips Icon" />
                    </div>
                    <div>
                        <div className="stat-label">Number of Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Weekly Trips Icon" />
                    </div>
                    <div>
                        <div className="stat-label">Weekly Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Monthly Trips Icon" />
                    </div>
                    <div>
                        <div className="stat-label">Monthly Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Daily Trips Icon" />
                    </div>
                    <div>
                        <div className="stat-label">Daily Trips</div>
                        <div className="stat-value">232,000</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
