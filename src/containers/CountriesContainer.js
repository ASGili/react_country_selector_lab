import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Use effect ensures that we only pull the data from the API when we don't have the data already. We pass the empty array as a dependency to run.
    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    // On X Functions
    const onCountrySelected = function(country) {
        // const newSelectedCountry = countries[index]
        setSelectedCountry(country)
    }

    // Amend the above to get the object out of the array here

    return (
        <div className="main-container">
            <CountryList countries={countries} onCountrySelected={onCountrySelected} selectedCountry={selectedCountry} />
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}

export default CountryContainer;
