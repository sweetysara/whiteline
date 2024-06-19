import React, { useState, useEffect, useRef } from 'react';
import './sidebar.css';

function Sidebar() {
    const [activeItem, setActiveItem] = useState('dashboard');
    const sectionRefs = useRef([]);

    const handleItemClick = (item) => {
        setActiveItem(item);
        document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Adjust the threshold as needed
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveItem(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>24/7</h1>
                <p>FLEET MANAGER</p>
            </div>
            <nav>
                <ul>
                    <li className={activeItem === 'dashboard' ? 'active' : ''} onClick={() => handleItemClick('dashboard')}>
                        <a href="#dashboard">
                            <i className="fas fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li className={activeItem === 'profile' ? 'active' : ''} onClick={() => handleItemClick('profile')}>
                        <a href="#profile">
                            <i className="fas fa-user"></i>
                            Vehicle
                        </a>
                    </li>
                    <li className={activeItem === 'ride-history' ? 'active' : ''} onClick={() => handleItemClick('ride-history')}>
                        <a href="#ride-history">
                            <i className="fas fa-history"></i>
                            Trips
                        </a>
                    </li>
                    <li className={activeItem === 'vehicle-maintenance' ? 'active' : ''} onClick={() => handleItemClick('vehicle-maintenance')}>
                        <a href="#vehicle-maintenance">
                            <i className="fas fa-wrench"></i>
                            Driver
                        </a>
                    </li>
                    <li className={activeItem === 'notifications' ? 'active' : ''} onClick={() => handleItemClick('notifications')}>
                        <a href="#notifications">
                            <i className="fas fa-bell"></i>
                            Workshop Movement
                        </a>
                    </li>
                    <li className={activeItem === 'reviews' ? 'active' : ''} onClick={() => handleItemClick('reviews')}>
                        <a href="#reviews">
                            <i className="fas fa-star"></i>
                            Notes
                        </a>
                    </li>
                    <li className={activeItem === 'navigation' ? 'active' : ''} onClick={() => handleItemClick('navigation')}>
                        <a href="#navigation">
                            <i className="fas fa-map"></i>
                            Key Custody
                        </a>
                    </li>
                    <li className={activeItem === 'settings' ? 'active' : ''} onClick={() => handleItemClick('settings')}>
                        <a href="#settings">
                            <i className="fas fa-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
