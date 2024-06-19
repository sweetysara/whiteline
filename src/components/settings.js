import React, { useContext } from 'react';
import { ThemeContext } from './themecontext';
import './settings.css';

const Settings = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="theme-selector">
                <label>
                    <input
                        type="radio"
                        value="green-theme"
                        checked={theme === 'green-theme'}
                        onChange={handleThemeChange}
                    />
                    Green Theme
                </label>
                <label>
                    <input
                        type="radio"
                        value="navy-blue-theme"
                        checked={theme === 'navy-blue-theme'}
                        onChange={handleThemeChange}
                    />
                    Navy Blue Theme
                </label>
                <label>
                    <input
                        type="radio"
                        value="aqua-theme"
                        checked={theme === 'aqua-theme'}
                        onChange={handleThemeChange}
                    />
                    Aqua Theme
                </label>
            </div>
        </div>
    );
};

export default Settings;
