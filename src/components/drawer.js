import React, { useEffect} from 'react';
import './drawer.css';

const Drawer = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        const handleEscapeKey = (event) => {
          if (event.keyCode === 27) {
            onClose(); // Close the drawer if Escape key is pressed
          }
        };
    
        document.addEventListener('keydown', handleEscapeKey);
    
        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [onClose]);
    
    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <div className='drawer-box'>
            <button className="close-button" onClick={onClose}>x</button>
            <div className="drawer-content">
                {children}
            </div>
            </div>
        </div>
    );
};

export default Drawer;
