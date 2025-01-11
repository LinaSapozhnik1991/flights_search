import React from 'react';
import BookingForm from '../components/BookingForm';
import '../styles/Booking/Booking.css'
const BookingPage = () => {
    const handleBooking = (bookingData) => {
        // Обработка данных бронирования
        console.log('Бронирование:', bookingData);
    };

    return (
        <div className='booking'>
            <h1>Забронируйте выбранный билет</h1>
            <BookingForm onBook={handleBooking} />
            
        </div>
    );
};

export default BookingPage;
