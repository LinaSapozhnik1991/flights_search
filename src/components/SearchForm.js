import React, { useState } from 'react';
import '../styles/SearchrResult/SearchResult.css'

const SearchForm = ({ onSearch }) => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!departure || !destination || !date) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }
        if (new Date(date) < new Date()) {
            setError('Дата не может быть в прошлом.');
            return;
        }
    
        setError('');
        onSearch({ from: departure, to: destination, date });
    };


    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input
                type="text"
                placeholder="Откуда"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
            />
            <input
                type="text"
                placeholder="Куда"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={getCurrentDate()}
            />
            <button type="submit">Поиск</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} 
        </form>
    );
};

export default SearchForm;
