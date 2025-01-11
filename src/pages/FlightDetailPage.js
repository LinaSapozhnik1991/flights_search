import React from 'react';
import { useParams } from 'react-router-dom';
import FlightDetails from '../components/FlightDetails';
import '../styles/FlightDetail/FlightDetail.css'
const FlightDetailPage = ({ flights }) => {
    const { id } = useParams();
    const flight = flights.find(flight => flight.id === id); 
  
    return (
        <div className='flight-detail_page'>
            <h2 className='flight-detail_page-title'>Подробности рейса</h2>
            {flight ? <FlightDetails flight={flight} /> : <p>Рейс не найден.</p>}
        </div>
    );
};

export default FlightDetailPage;
