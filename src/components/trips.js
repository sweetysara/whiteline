import React from 'react';
import './Trips.css';
import carImage from '../assets/images/car.jpg';

function Trips() {
    return (
        <div className="trips">
            <div className="trip-navigation">
                <h2>TRIPS</h2>
                <span className="future-trips">Future Trips</span>
                <span className="past-trips">Past Trips</span>
            </div>
            <div className="trip-container">
                <div className="trip past-trip">
                    <div className="trip-image" style={{ backgroundImage: `url(${carImage})` }}>
                        <div className="add-button">+</div>
                        <p className='trip-type'>Past Trip</p>
                        <h3 className='destination'>Dukan to Doha</h3>
                        <p className='time'>10/06/24</p>
                        <p className='date'>12:00AM - 6:00PM</p>
                    </div>
                </div>
                <div className="trip current-trip">
                    <div className="trip-image" style={{ backgroundImage: `url(${carImage})` }}>
                        <div className="add-button">+</div>
                        <p className='trip-type'>Current Trip</p>
                        <h3 className='destination'>Doha to Dukan</h3>
                        <p className='time'>11/06/24 </p>
                        <p className='date'>12:00AM - 6:00PM</p>
                    </div>
                </div>
                <div className="trip future-trip">
                    <div className="trip-image" style={{ backgroundImage: `url(${carImage})` }}>
                        <div className="add-button">+</div>
                        <p className='trip-type'>Future Trip</p>
                        <h3 className='destination'>Dukan to Doha</h3>
                        <p className='time'>12/06/24</p>
                        <p className='date'>12:00AM - 6:00PM</p>
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
