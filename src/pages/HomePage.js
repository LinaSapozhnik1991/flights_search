import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import '../styles/Home/HomePage.css'
import SearchResultsPage from './SearchResultsPage';
import Preloader from '../components/Preloader';
const HomePage = ({ flights, setFlights }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [allFlights, setAllFlights] = useState(flights); 
    const [searchCriteria, setSearchCriteria] = useState({});
    const handleSearch = async (criteria) => {
        setLoading(true);
        setError(null);
        setSearchCriteria(criteria); 
        try {
         
            if (criteria.id) {
                setFlights(allFlights);
            } else {
                const response = await fetch(`http://localhost:5000/flights`);
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }
                const fetchedFlights = await response.json();
                setAllFlights(fetchedFlights);
                setFlights(fetchedFlights); 
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home-page'>
           
            <h2>Поиск рейсов</h2>
            <SearchForm onSearch={handleSearch} />
            
            {loading && <Preloader/>}
            {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
            {flights.length === 0 && !loading && <p>Введите данные для поиска</p>}
            
            <SearchResultsPage flights={flights}  searchCriteria={searchCriteria}/>
           
        </div>
    );
};

export default HomePage;
