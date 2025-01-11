import React, { useState, useEffect } from 'react';
import FlightList from '../components/FlightList';
import FilterTransfer from '../components/FilterTransfer';
import '../styles/SearchrResult/SearchResult.css';
import SortFlights from '../components/SortFlight';

const SearchResultsPage = ({ flights, searchCriteria}) => {
    const [filteredFlights, setFilteredFlights] = useState(flights);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
       
        if (flights.length > 0) {
            setShowFilter(true);
        }
    }, [flights]);
    const { from, to, date } = searchCriteria;
    const routeMessage = from && to && date ? `Выберите подходящий рейс по направлению: "${from} - ${to} на ${date}"` : ''
    return (
        <div className='search-result'>
              <div className='search-result_message'>{routeMessage && <p>{routeMessage}</p>}</div>
            <FlightList flights={filteredFlights} />
            {showFilter && (<>
                  <SortFlights setFilteredFlights={setFilteredFlights} flights={filteredFlights} />
                <FilterTransfer flights={flights} setFilteredFlights={setFilteredFlights} />
                </>
            )}
        </div>
    );
};

export default SearchResultsPage;