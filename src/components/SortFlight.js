import React, { useState } from 'react';
import '../styles/Sort/SortFlight.css';

const SortFlights = ({ setFilteredFlights, flights }) => {
    const [activeSort, setActiveSort] = useState(null); // Состояние для отслеживания активной кнопки

    const handleSort = (criteria) => {
        const sortedFlights = [...flights].sort((a, b) => {
            if (criteria === 'price') {
                return a.price - b.price;
            } else if (criteria === 'duration') {
         
                const durationA = parseInt(a.flight_time); 
                const durationB = parseInt(b.flight_time);
                return durationA - durationB;
            }
            return 0;
        });
      
        setFilteredFlights(sortedFlights);
        setActiveSort(criteria); 
    };

    return (
        <div className="sort-flights">
            <button onClick={() => handleSort('price')}  className={`sort-flights_button ${activeSort === 'price' ? 'active' : ''}`}>Сортировать по цене</button>
            <button onClick={() => handleSort('duration')}  className={`sort-flights_button ${activeSort === 'duration' ? 'active' : ''}`}>Сортировать по длительности</button>
        </div>
    );
};

export default SortFlights;