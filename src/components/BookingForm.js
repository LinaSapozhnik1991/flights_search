/* eslint-disable no-undef */
import React, { useState } from 'react';

import '../styles/Booking/Booking.css'

import Ok from './Ok';

const BookingForm = ({ onBook }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onBook({ name, email });
        setSuccessMessage('Бронирование успешно выполнено!');
        setName('');
        setEmail('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="booking-form">
                <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
                <input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <button type="submit">Забронировать</button>
            </form>
        
            {successMessage && 
            <div className='booking-message'>{successMessage}
            <Ok/></div>} 
         
        </div>
        
    );
};

export default BookingForm;
