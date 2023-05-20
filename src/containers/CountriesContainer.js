import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState("");

    // Use effect ensures that we only pull the data from the API when we don't have the data already. We pass the empty array as a dependency to run.
    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }
     let countriesByRegion

     if (selectedRegion) {countriesByRegion = countries.filter((country)=> {return country.region === selectedRegion})}
     else {countriesByRegion = countries}

    const onCountrySelected = function(country) {
        // const newSelectedCountry = countries[index]
        setSelectedCountry(country)
    }

    const onRegionSelected = function(region) {
        setSelectedRegion(region)
    }

    // Amend the above to get the object out of the array here

    return (
        <section>
            <CountryList countries={countries} countriesByRegion={countriesByRegion} onCountrySelected={onCountrySelected} onRegionSelected={onRegionSelected} selectedCountry={selectedCountry} />
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </section>
    )
}

export default CountryContainer;
