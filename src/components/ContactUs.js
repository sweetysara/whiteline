import React, { useState } from 'react';
import './drawer_content.css'; // Assuming your CSS file is properly imported
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        date: false,
        time: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields are filled
        const { firstName, lastName, email, phoneNumber, date, time } = formData;
        if (!firstName || !lastName || !email || !phoneNumber || !date || !time) {
            // Set error state for empty fields
            setFormErrors({
                firstName: !firstName,
                lastName: !lastName,
                email: !email,
                phoneNumber: !phoneNumber,
                date: !date,
                time: !time
            });
            return;
        }

        // Prepare email parameters for EmailJS
        const emailParams = {
            firstName,
            lastName,
            email,
            phoneNumber,
            date,
            time
        };

        // Send email using EmailJS
        emailjs.send('service_mdumb7c', 'template_70iri86', emailParams, 'uvZi5R3d_cqUtS4Fw')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    date: '',
                    time: ''
                });
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000); // Reset submitted state after 3 seconds
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to submit the form.');
            });
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Ready to elevate your customer service experience? Contact White Line Offshore Call Center today to discuss how our tailored outsourcing solutions can benefit your business.</p>
            
            <div className="form-contact">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Schedule a Conversation</h3>
                    <p>To schedule a consultation or request more information, please fill out the form below. One of our representatives will contact you shortly to arrange a convenient time.</p>

                    <div className="c-form-field-row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className={`c-input-field ${formErrors.firstName ? 'error' : ''}`}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className={`c-input-field ${formErrors.lastName ? 'error' : ''}`}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="c-form-field-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`c-input-field ${formErrors.email ? 'error' : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className={`c-input-field ${formErrors.phoneNumber ? 'error' : ''}`}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="c-form-field-row">
                        <input
                            type="date"
                            name="date"
                            className={`c-input-field ${formErrors.date ? 'error' : ''}`}
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <input
                            type="time"
                            name="time"
                            className={`c-input-field ${formErrors.time ? 'error' : ''}`}
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Address: White House, Koratty P O Thrissur 680000</p>
                    <p>Phone: 9633220088</p>
                    <p>Email: whiteline.co.in</p>
                    <div className='social-media'>
                        <h3>Follow Us On</h3>
                        <p>Stay updated with the latest news and insights by connecting with us on:</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {submitted && (
                <div className="popup-message">
                    <p>Message successfully submitted!</p>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
