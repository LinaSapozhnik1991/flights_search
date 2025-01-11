import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import FlightDetailPage from './pages/FlightDetailPage';
import BookingPage from './pages/BookingPage';
import './styles/App/App.css'

const App = () => {
    const [flights, setFlights] = useState([]);
    return (
       
            <div className='app'>
               
                <Routes>
                    <Route path="/" element={<HomePage flights={flights} setFlights={setFlights}/>} />
                    <Route path="/search-results" element={<SearchResultsPage flights={flights} />} />
                    <Route path="/flight/:id" element={<FlightDetailPage flights={flights} />} />
                    <Route path="/booking" element={<BookingPage/>} />
                </Routes>
               
            </div>

    );
};

export default App;
