import React, { useState, useRef } from 'react';
import './header.css';
import logo from './assets/logo.png';
import Drawer from './drawer';
import WhoWeAre from './WhoWeAre';
import WhyChooseUs from './WhyChooseUs';
import WhatWeDo from './WhatWeDo';
import ContactUs from './ContactUs';

const Header = () => {
    const headerRef = useRef(null);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null);
    const [activeItem, setActiveItem] = useState("");

    const toggleDrawer = (content, item) => {
        setDrawerContent(content);
        setDrawerOpen(true);
        setActiveItem(item);
        toggleMenu(); // Close the menu when an item is selected
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setActiveItem("");
    };

    const toggleMenu = () => {
        const header = headerRef.current;
        if (header) {
            header.classList.toggle('active');
        }
    };

    const isActive = (item) => activeItem === item ? 'active' : '';

    return (
        <>
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
                {drawerContent}
            </Drawer>
            <header className="headers" ref={headerRef}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="nav">
                    <a 
                        href="#home" 
                        onClick={(e) => { e.preventDefault(); toggleDrawer(<WhoWeAre />, 'WhoWeAre'); }}
                        className={isActive('WhoWeAre')}
                    >
                        Who are we
                    </a>
                    <a 
                        href="#about" 
                        onClick={(e) => { e.preventDefault(); toggleDrawer(<WhyChooseUs />, 'WhyChooseUs'); }}
                        className={isActive('WhyChooseUs')}
                    >
                        Why Choose Us
                    </a>
                    <a 
                        href="#services" 
                        onClick={(e) => { e.preventDefault(); toggleDrawer(<WhatWeDo />, 'WhatWeDo'); }}
                        className={isActive('WhatWeDo')}
                    >
                        What Do We Do
                    </a>
                    <a 
                        href="#pricing" 
                        onClick={(e) => { e.preventDefault(); toggleDrawer(<ContactUs />, 'ContactUs'); }}
                        className={isActive('ContactUs')}
                    >
                        Contact Us
                    </a>
                </nav>
                <div className="toggle" onClick={toggleMenu}></div>
            </header>
        </>
    );
};

export default Header;
