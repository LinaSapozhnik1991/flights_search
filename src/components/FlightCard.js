import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import '../styles/FlightDetail/FlightDetail.css';

const FlightCard = ({ flight }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/flight/${flight.id}`); 
    };

    return (
        <div className="flight-card">
            <div className="flight-header">
                <h2 className="flight-airline">{flight.airline}</h2>
                <p className="flight-price">{flight.price} руб.</p>
            </div>
            <div className='flight-info'>
                <div className='flight-info_data'>
                    <h4>Отправление - прибытие</h4>
            <p> {new Date(flight.departure).toLocaleString()}</p> 
            <p> {new Date(flight.arrival).toLocaleString()}</p>
            </div> 
            <div className='flight-info_transers'>
            <h4>Пересадки </h4> 
                <p>{flight.transfers === 0 ? 'Прямой рейс' : `${flight.transfers} пересадка(и)`}</p>
            </div>
            <div className='flight-info_baggage'>
            <h4>Багаж</h4> <p>{flight.baggage}</p> </div>
            </div>
            <button onClick={handleDetailsClick} className='book-button'>Подробнее</button>
        </div>
    );
};

export default FlightCard;
