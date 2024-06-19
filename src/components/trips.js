import React from 'react';
import './Trips.css';

function Trips() {
    return (
        <div className="trips">
            <h2>Trips</h2>
            <div className="trip-container">
                <div className="trip past-trip">
                    <div className="trip-image" style={{ backgroundImage: 'url/src/assets/images/car.jpg' }}>
                        <p>Past Trip</p>
                        <h3>Dukan to Doha</h3>
                        <p>10/06/24 <br /> 12:00AM - 6:00PM</p>
                    </div>
                </div>
                <div className="trip current-trip">
                    <div className="trip-image" style={{ backgroundImage: '/src/assets/images/car.jpg' }}>
                        <p>Current Trip</p>
                        <h3>Doha to Dukan</h3>
                        <p>11/06/24 <br /> 12:00AM - 6:00PM</p>
                    </div>
                </div>
                <div className="trip future-trip">
                    <div className="trip-image" style={{ backgroundImage: '/src/assets/images/car.jpg' }}>
                        <p>Future Trip</p>
                        <h3>Dukan to Doha</h3>
                        <p>12/06/24<br />
                            12:00AM - 6:00PM</p>
                    </div>
                </div>
            </div>
            <div className="trip-description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </div>
        </div>
    );
}

export default Trips;
