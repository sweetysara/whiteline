import React from 'react';
import './header.css';
import profilePhoto from '../assets/images/image.jpeg'; // Ensure this path is correct
import carSideIcon from '../assets/images/car-side-svgrepo-com.svg';
import carService from '../assets/images/car-service-icon.svg';
function Header() {
    return (
        <header className="header">

            <h1>WELCOME TO <span>247 FLEET MANAGER</span></h1>
            <div class="search-container">
                <input className=" " type="text" placeholder="SEARCH" />
            </div>
            <div class="icons-container">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-comment-dots"></i>
            </div>
            <div class="vertical-line"></div>
            <div class="profile-container">
                <img src={profilePhoto} alt="Profile" class="profile-photo" />
            </div>


            <div className="stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Number of Trips Icon" />
                    </div>
                    <div className='vertical-line-car'></div>
                    <div>
                        <div className="stat-label">Number of Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Weekly Trips Icon" />
                    </div>
                    <div className='vertical-line-car'></div>
                    <div>
                        <div className="stat-label">Weekly Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Monthly Trips Icon" />
                    </div>
                    <div className="vertical-line-car"></div>
                    <div>
                        <div className="stat-label">Monthly Trips</div>
                        <div className="stat-value">2,142,950</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">
                        <img src={carSideIcon} alt="Daily Trips Icon" />
                    </div>
                    <div className='vertical-line-car'>
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
