import React, { useState, useEffect } from 'react';
import './popupform.css'; // Assuming you create popupform.css for styling

const PopupForm = ({ car, onSubmit, onClose }) => {
    const initialFormData = {
        vehiclename: car ? car.name : '',
        vehiclenumber: car ? car.number : '',
        insurancedue: car ? car.insurancedue : '',
        isthimaradue: car ? car.isthimaradue : '',
        vehicletype: car ? car.type : 'SUV',
        cv: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (car) {
            setFormData({
                vehiclename: car.name,
                vehiclenumber: car.number,
                insurancedue: car.insurancedue,
                isthimaradue: car.isthimaradue,
                vehicletype: car.type,
                cv: '',
            });
        } else {
            setFormData(initialFormData);
        }
    }, [car, initialFormData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="popup-form-overlay">
            <div className="popup-form-container">
                <span className="close-popup" onClick={onClose}>&times;</span>
                <form className="popup-form" onSubmit={handleSubmit}>
                    <h2>{car ? 'Edit Car' : 'Add A Car'}</h2>
                    <div className="popup-form-field-row">
                        <div className="popup-form-field-column">
                            <label htmlFor="vehiclename">Vehicle Name</label>
                            <input
                                type="text"
                                name="vehiclename"
                                id="vehiclename"
                                placeholder="Vehicle Name"
                                className="popup-input-field"
                                value={formData.vehiclename}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="popup-form-field-column">
                            <label htmlFor="vehiclenumber">Vehicle Number</label>
                            <input
                                type="text"
                                name="vehiclenumber"
                                id="vehiclenumber"
                                placeholder="Vehicle Number"
                                className="popup-input-field"
                                value={formData.vehiclenumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="popup-form-field-row">
                        <div className="popup-form-field-column">
                            <label htmlFor="insurancedue">Insurance Due Date</label>
                            <input
                                type="date"
                                name="insurancedue"
                                id="insurancedue"
                                className="popup-input-field"
                                value={formData.insurancedue}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="popup-form-field-column">
                            <label htmlFor="isthimaradue">Isthimaea Due Date</label>
                            <input
                                type="date"
                                name="isthimaradue"
                                id="isthimaradue"
                                className="popup-input-field"
                                value={formData.isthimaradue}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="popup-form-field-row">
                        <div className="popup-form-field-column">
                            <label htmlFor="vehicletype">Vehicle Type</label>
                            <select
                                name="vehicletype"
                                id="vehicletype"
                                className="popup-input-field"
                                value={formData.vehicletype}
                                onChange={handleChange}
                                required
                            >
                                <option value="SUV">SUV</option>
                                <option value="MPV">MPV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Luminous">Luminous</option>
                            </select>
                        </div>
                        <div className="popup-form-field-column">
                            <label htmlFor="cv">Upload Photo</label>
                            <input
                                type="file"
                                name="cv"
                                id="cv"
                                className="popup-file-input"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="popup-submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
