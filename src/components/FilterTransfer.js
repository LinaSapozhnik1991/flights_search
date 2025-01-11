import React, { useState, useEffect } from 'react';
import '../styles/Filter/Filter.css'
const FilterTransfer = ({ flights, setFilteredFlights }) => {
    const [direct, setDirect] = useState(false);
    const [oneStop, setOneStop] = useState(false);
    const [twoStops, setTwoStops] = useState(false);

    useEffect(() => {
        // Функция для фильтрации рейсов на основе выбранных фильтров
        const applyFilters = () => {
            let filtered = flights;

            if (direct) {
                filtered = filtered.filter(flight => flight.transfers === 0);
            }
            if (oneStop) {
                filtered = filtered.filter(flight => flight.transfers === 1);
            }
            if (twoStops) {
                filtered = filtered.filter(flight => flight.transfers === 2);
            }

            // Если ни один фильтр не выбран, показываем все рейсы
            if (!direct && !oneStop && !twoStops) {
                filtered = flights;
            }

            setFilteredFlights(filtered);
        };

        applyFilters(); 

    }, [direct, oneStop, twoStops, flights, setFilteredFlights]);

    return (
        <div className='filter'>
    
            <div className='filter-box none'>
            <label>
                <input
                    type="checkbox"
                    checked={direct}
                    onChange={() => setDirect(!direct)}
                />
                Прямые рейсы
            </label>
            </div>
            <div className='filter-box one'>
            <label>
                <input
                    type="checkbox"
                    checked={oneStop}
                    onChange={() => setOneStop(!oneStop)}
                />
                1 пересадка
            </label>
            </div>
            <div className='filter-box two'>
            <label>
                <input
                    type="checkbox"
                    checked={twoStops}
                    onChange={() => setTwoStops(!twoStops)}
                />
                2 пересадки
            </label>
            </div>
        </div>
    );
};

export default FilterTransfer;
