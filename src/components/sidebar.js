import React, { useState, useEffect, useRef } from 'react';
import './sidebar.css';
import logo from '../assets/images/logo.png'; // Adjust the path based on your file structure

function Sidebar() {
    const [activeItem, setActiveItem] = useState('dashboard');
    const sectionRefs = useRef({});

    const handleItemClick = (item) => {
        setActiveItem(item);
        document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sections = ['dashboard', 'profile', 'ride-history', 'vehicle-maintenance', 'notifications', 'reviews', 'navigation', 'settings'];
        sections.forEach(section => {
            sectionRefs.current[section] = document.getElementById(section);
        });

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
        sections.forEach(section => {
            const ref = sectionRefs.current[section];
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
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
                            <i className="fa fa-car"></i>
                            Vehicle
                        </a>
                    </li>

                    <li className={activeItem === 'vehicle-maintenance' ? 'active' : ''} onClick={() => handleItemClick('vehicle-maintenance')}>
                        <a href="#vehicle-maintenance">
                            <i className="fas fa-user"></i>
                            Driver
                        </a>
                    </li>
                    <li className={activeItem === 'ride-history' ? 'active' : ''} onClick={() => handleItemClick('ride-history')}>
                        <a href="#ride-history">
                            <i className="fa fa-map-marker"></i>
                            Trips
                        </a>
                    </li>
                    <li className={activeItem === 'notifications' ? 'active' : ''} onClick={() => handleItemClick('notifications')}>
                        <a href="#notifications">
                            <i className="fa fa-wrench"></i>
                            Workshop Movement
                        </a>
                    </li>
                    <li className={activeItem === 'reviews' ? 'active' : ''} onClick={() => handleItemClick('reviews')}>
                        <a href="#reviews">
                            <i className="fa fa-sticky-note"></i>
                            Notes
                        </a>
                    </li>
                    <li className={activeItem === 'navigation' ? 'active' : ''} onClick={() => handleItemClick('navigation')}>
                        <a href="#navigation">
                            <i className="fa fa-key"></i>
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
