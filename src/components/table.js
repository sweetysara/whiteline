import React, { useState } from 'react';
import './table.css';

const Table = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const dummyData = [
        { vehicleNumber: '1234', vehicleName: 'Toyota', vehicleType: 'SUV', workshopVisits: 5 },
        { vehicleNumber: '5678', vehicleName: 'Honda', vehicleType: 'Sedan', workshopVisits: 3 },
        { vehicleNumber: '9101', vehicleName: 'Ford', vehicleType: 'Truck', workshopVisits: 7 },
        { vehicleNumber: '1121', vehicleName: 'BMW', vehicleType: 'Convertible', workshopVisits: 2 },
        { vehicleNumber: '3141', vehicleName: 'Audi', vehicleType: 'Coupe', workshopVisits: 6 },
        { vehicleNumber: '5161', vehicleName: 'Mercedes', vehicleType: 'Van', workshopVisits: 4 },
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = dummyData.filter(data =>
        data.vehicleNumber.includes(searchTerm)
    );

    return (
        <div className="table-container">
            <div className='headinsearch'>
                <h2>WORKSHOP MOVEMENT DETAILS</h2>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by Vehicle Number"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <table className="vehicle-table">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Type</th>
                        <th>Workshop Visits</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data, index) => (
                        <tr key={index}>
                            <td className="photo-cell">
                                <div className="round-photo"></div>
                            </td>
                            <td>{data.vehicleNumber}</td>
                            <td>{data.vehicleName}</td>
                            <td>{data.vehicleType}</td>
                            <td>{data.workshopVisits}</td>
                            <td><button className="action-button">Add Workshop Visit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="table-more-button">More</button>
        </div>
    );
};

export default Table;
