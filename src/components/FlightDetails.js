import React from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const FlightDetails = ({ flight}) => {
  const navigate = useNavigate(); 
  const departureDate = format(new Date(flight.departure), 'dd MMMM yyyy, HH:mm');
  const arrivalDate = format(new Date(flight.arrival), 'dd MMMM yyyy, HH:mm');
  const handleBookingClick = () => {
    navigate(`/booking/`); 
  };
  return (<>
    <div className='flight-details'>
     
      <p><strong>Авиакомпания:</strong> {flight.airline}</p>
      <p><strong>Время вылета:</strong> {departureDate}</p>
      <p><strong>Время прибытия:</strong> {arrivalDate}</p>
      <p><strong>Количество пересадок:</strong> {flight.transfers}</p>
      <p><strong>Продолжительность полета:</strong> {flight.flight_time}</p>
      <p><strong>Класс обслуживания:</strong> {flight.class}</p>
      <p><strong>Правила по багажу:</strong> {flight.baggage}</p>
      <p><strong>Дополнительная информация:</strong> {flight.details}</p>   </div>
      <button onClick={handleBookingClick} className='book-button'>
        Забронировать
      </button>
 
    </>
  );
};

export default FlightDetails;
