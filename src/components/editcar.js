import React, { useState } from 'react';
import './editcar.css';
import carImage from '../assets/images/car.jpg'; // Replace with actual path
import PopupForm from './PopupForm'; // Assuming PopupForm.js contains your form component

function EditCar() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null); // To store the car being edited

    const cars = [
        { id: 1, name: 'Car 1', image: carImage },
        { id: 2, name: 'Car 2', image: carImage },
        { id: 3, name: 'Car 3', image: carImage },
        { id: 4, name: 'Car 4', image: carImage },
        { id: 5, name: 'Car 5', image: carImage },
        { id: 6, name: 'Car 6', image: carImage },

    ];

    const handleEditClick = (car) => {
        setSelectedCar(car);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setSelectedCar(null);
        setShowPopup(false);
    };

    const handleSubmitForm = (formData) => {
        // Logic to handle form submission (add or update car)
        console.log(formData);
        handleClosePopup(); // Close the popup after submission (you may need to implement actual submission logic)
    };

    return (
        <div className="edit-car-page">
            <h2>AVAILABLE CARS</h2>
            <div className="car-grid">
                {cars.map((car) => (
                    <div key={car.id} className="car-tile">
                        <img src={car.image} alt={car.name} className="car-image" />
                        <div className="car-details">
                            <span className="car-name">{car.name}</span>
                            <div className="car-actions">
                                <button className="edit-button" onClick={() => handleEditClick(car)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="delete-button"><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="more-button">More</button>

            {showPopup && (
                <PopupForm
                    car={selectedCar}
                    onSubmit={handleSubmitForm}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}

export default EditCar;
