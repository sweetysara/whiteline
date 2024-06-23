import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Add this line
import { useNavigate } from 'react-router-dom';

import Sidebar from './sidebar';
import Header from './header';
import PerformanceMetrics from './performancemetrics';
import Planner from './planner';
import Trips from './trips';
import Table from './table';
import KeyCustody from './keycustody';
import edit from '../assets/images/edit-3-svgrepo-com.svg'
import scratch from '../assets/images/car-repair-svgrepo-com (1).svg'
import location from '../assets/images/car-location-svgrepo-com.svg'
import carImage1 from '../assets/images/car.jpg';
import carImage2 from '../assets/images/car.jpg';
import carImage3 from '../assets/images/car.jpg';
import carImage4 from '../assets/images/car.jpg';
import carGarage from '../assets/images/car-service-icon.svg';
import carService from '../assets/images/garage-icon.svg';
import './dashboard.css';
import carImage from '../assets/images/car2.jpeg';


function Dashboard() {
    const [formData, setFormData] = useState({
        vehiclename: '',
        vehiclenumber: '',
        insurancedue: '',
        isthimaradue: '',
        vehicletype: '',
        photo: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    const cars = [
        { image: carImage1, status: "AVAILABLE" },
        { image: carImage2, status: "AVAILABLE" },
        { image: carImage3, status: "AVAILABLE" },
        { image: carImage4, status: "AVAILABLE" }
    ];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? cars.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === cars.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getCardClassName = (index) => {
        if (index === currentIndex) return "car-card active";
        if (index === (currentIndex + 1) % cars.length) return "car-card next";
        if (index === (currentIndex - 1 + cars.length) % cars.length) return "car-card prev";
        return "car-card";
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const sidebarLinks = document.querySelectorAll('.sidebar a');

            let currentSection = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 2) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add this line

    const handleEditCarDetailsClick = () => {
        navigate('/editcar'); // Navigate to editcar page
    };

    return (
        <div className="dashboard">
            <Sidebar activeSection={activeSection} />
            <div className="main-content">
                <div className='header-div'>
                    <Header />
                </div>
                <section id='dashboard'>
                    <div className="content-with-header">
                        <div className="content">
                            <div className="left">
                                <div className="car-cards">
                                    <button onClick={goToPrevious} className="carousel-button left">&#9664;</button>
                                    {cars.map((car, index) => (
                                        <div key={index} className={getCardClassName(index)}>
                                            <div className="car-overlay">
                                                <span className="car-status">{car.status}</span>
                                            </div>
                                            <img src={car.image} alt={`Car ${index + 1}`} />
                                            <button className="assign-button">ASSIGN TRIP</button>
                                        </div>
                                    ))}
                                    <button onClick={goToNext} className="carousel-button right">&#9654;</button>
                                </div>

                                <Planner />


                            </div>
                            <div className="right">
                                <PerformanceMetrics />
                                <Trips />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="profile">
                    <div className="vehicle">
                        <div className="contents">
                            <div className="left">
                                <div className="add-car">
                                    <div className="form-container">
                                        <form className="c-form" onSubmit={handleSubmit}>
                                            <h2>ADD A CAR</h2>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehiclename">Vehicle Name</label>
                                                    <input
                                                        type="text"
                                                        name="vehiclename"
                                                        id="vehiclename"
                                                        placeholder="Vehicle Name"
                                                        className="c-input-field"
                                                        value={formData.vehiclename}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehiclenumber">Vehicle Number</label>
                                                    <input
                                                        type="text"
                                                        name="vehiclenumber"
                                                        id="vehiclenumber"
                                                        placeholder="Vehicle Number"
                                                        className="c-input-field"
                                                        value={formData.vehiclenumber}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="insurancedue">Insurance Due Date</label>
                                                    <input
                                                        type="date"
                                                        name="insurancedue"
                                                        id="insurancedue"
                                                        placeholder="dd-mm-yyyy"
                                                        className="c-input-field"
                                                        value={formData.insurancedue}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="isthimaradue">Isthimara Due Date</label>
                                                    <input
                                                        type="date"
                                                        name="isthimaradue"
                                                        id="isthimaradue"
                                                        placeholder="dd-mm-yyyy"
                                                        className="c-input-field"
                                                        value={formData.isthimaradue}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehicletype">Vehicle Type</label>
                                                    <select
                                                        name="vehicletype"
                                                        id="vehicletype"
                                                        className="c-input-field"
                                                        value={formData.vehicletype}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="SUV">SUV</option>
                                                        <option value="MPV">MPV</option>
                                                        <option value="Sedan">Sedan</option>
                                                        <option value="Luminous">Luminous</option>
                                                    </select>
                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="cv">Upload Photo</label>
                                                    <input
                                                        type="file"
                                                        name="cv"
                                                        id="cv"
                                                        className="c-file-input"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="c-submit-button">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                {/* <div className="image-section">
                                    <div className="cardss">
                                        <div className="trip-images" style={{ backgroundImage: `url(${carImage})` }}><div className='oveerlay'></div>
                                            <div className='button-container'>
                                                <button className="image-button" onClick={handleEditCarDetailsClick}>Edit Car Details</button>
                                                <button className="image-button">Add Scratches</button>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={edit} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">EDIT   </span>
                                        <span className="label">Vehicle Details</span>
                                    </div>
                                </button>


                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={scratch} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">ADD</span>
                                        <span className="label">Scratches</span>
                                    </div>
                                </button>
                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={location} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">Check</span>
                                        <span className="label">Vehicle Status</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </section>
                <section id="vehicle-maintenance">
                    <div className="vehicle">

                        <div className="contents">
                            <div className="left">
                                <div class="add-car">
                                    <div class="form-container">
                                        <form className="c-form" onSubmit={handleSubmit}>
                                            <h2>Add A Driver</h2>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehiclename">Driver Name</label>
                                                    <input
                                                        type="text"
                                                        name="vehiclename"
                                                        id="vehiclename"
                                                        placeholder="Vehicle Name"
                                                        className="c-input-field"
                                                        value={formData.vehiclename}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehiclenumber">Driver Username</label>
                                                    <input
                                                        type="text"
                                                        name="vehiclenumber"
                                                        id="vehiclenumber"
                                                        placeholder="Vehicle Number"
                                                        className="c-input-field"
                                                        value={formData.vehiclenumber}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="insurancedue">Password</label>
                                                    <input
                                                        type="text"
                                                        name="insurancedue"
                                                        id="insurancedue"
                                                        placeholder="Password"
                                                        className="c-input-field"
                                                        value={formData.insurancedue}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="isthimaradue">Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        name="isthimaradue"
                                                        id="isthimaradue"
                                                        placeholder="Mobile Number"
                                                        className="c-input-field"
                                                        value={formData.isthimaradue}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="c-form-field-row">
                                                <div className="c-form-field-column">
                                                    <label htmlFor="vehicletype">Driver Licence No</label>
                                                    <input
                                                        type="text"
                                                        name="vehicletype"
                                                        id="vehicletype"
                                                        placeholder='Driver Licence Number'
                                                        className="c-input-field"
                                                        value={formData.vehicletype}
                                                        onChange={handleChange}
                                                    />

                                                </div>
                                                <div className="c-form-field-column">
                                                    <label htmlFor="cv">Driver Licence Expiry</label>
                                                    <input
                                                        type="date"
                                                        name="cv"
                                                        id="cv"
                                                        placeholder='Expiry DATE'
                                                        className="c-input-field"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="c-submit-button">Submit</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="right">
                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={edit} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">EDIT</span>
                                        <span className="label">Vehicle Status</span>
                                    </div>
                                </button>


                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={scratch} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">ADD</span>
                                        <span className="label">Scratches</span>
                                    </div>
                                </button>
                                <button className="edit-cardd">
                                    <div className="iicon-container">
                                        <img src={location} alt="Edit Icon" className="iicon" />
                                    </div>
                                    <div className="text-container">
                                        <span className="count">Check</span>
                                        <span className="label">Vehicle Status</span>
                                    </div>
                                </button>




                            </div>
                        </div>

                    </div>
                </section>
                <section id="ride-history">


                    <div className="contents">
                        <div className="left">
                            <div class="add-trip">
                                <div class="form-container">
                                    <form className="c-form" onSubmit={handleSubmit}>
                                        <h2>Assign Trip</h2>
                                        <div className="c-form-field-row">
                                            <div className="c-form-field-column">
                                                <label htmlFor="vehiclename">Car Name</label>
                                                <input
                                                    type="text"
                                                    name="vehiclename"
                                                    id="vehiclename"
                                                    placeholder="Vehicle Name"
                                                    className="c-input-field"
                                                    value={formData.vehiclename}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="c-form-field-column">
                                                <label htmlFor="vehiclenumber">Car Number</label>
                                                <input
                                                    type="text"
                                                    name="vehiclenumber"
                                                    id="vehiclenumber"
                                                    placeholder="Vehicle Number"
                                                    className="c-input-field"
                                                    value={formData.vehiclenumber}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="c-form-field-row">
                                            <div className="c-form-field-column">
                                                <label htmlFor="insurancedue">Driver ID</label>
                                                <input
                                                    type="text"
                                                    name="driverid"
                                                    id="driverid"
                                                    placeholder="driverid"
                                                    className="c-input-field"
                                                    value={formData.insurancedue}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="c-form-field-column">
                                                <label htmlFor="isthimaradue">Trip Date</label>
                                                <input
                                                    type="date"
                                                    name="tripdate"
                                                    id="tripdate"
                                                    placeholder="dd-mm-yyyy"
                                                    className="c-input-field"
                                                    value={formData.isthimaradue}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="c-form-field-row">
                                            <div className="c-form-field-column">
                                                <label htmlFor="vehicletype">Trip Type</label>
                                                <select
                                                    name="vehicletype"
                                                    id="vehicletype"
                                                    placeholder="Trip Type"
                                                    className="c-input-field"
                                                    value={formData.vehicletype}
                                                    onChange={handleChange}
                                                >
                                                    <option value="revenue">Revenew</option>
                                                    <option value="non-revenue">Non Revenew</option>

                                                </select>
                                            </div>
                                            <div className="c-form-field-column">
                                                <label htmlFor="cv">Odometer Reading</label>
                                                <input
                                                    type="text"
                                                    name="odometer"
                                                    id="odometer"
                                                    placeholder='Odometer Reading'
                                                    className="c-file-input"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="c-submit-button">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="right">
                            <div className="ccard">
                                <div className="iicon-container">
                                    <img src={carService} alt="Number of Trips Icon" />
                                </div>
                                <div className="text-container">
                                    <span className="count">56</span>
                                    <span className="label">Cars on Trip</span>
                                </div>
                            </div>
                            <div className="ccard">
                                <div className="iicon-container">
                                    <img src={carService} alt="Number of Trips Icon" />
                                </div>
                                <div className="text-container">
                                    <span className="count">56</span>
                                    <span className="label">Cars in Yard</span>
                                </div>
                            </div>
                            <div className="ccard">
                                <div className="iicon-container">
                                    <img src={carGarage} alt="Number of Trips Icon" />
                                </div>
                                <div className="text-container">
                                    <span className="count">56</span>
                                    <span className="label">Cars in Workshop</span>
                                </div>
                            </div>

                        </div>
                    </div>


                </section>
                <section id="notifications">

                    <div classname="contents">
                        <div class='tables'>
                            <Table />
                        </div>

                    </div>
                </section>
                <section id="reviews">
                    <div className="vehicle">

                        <div className="content-note">
                            <div className="left">
                                <Planner />

                            </div>
                            <div className="right">
                                <Planner />
                            </div>
                        </div>

                    </div>
                </section>
                <section id="navigation">

                    <div classname="contents">

                        <KeyCustody />
                    </div>
                </section>
                <section id="settings">
                    <h2>Settings</h2>

                </section>
            </div >
        </div >
    );
}

export default Dashboard;
