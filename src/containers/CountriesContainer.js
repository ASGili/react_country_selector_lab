import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState("");


    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }
    
    let countriesByRegion = countries

    if (selectedRegion) {countriesByRegion = countries.filter((country)=> {return country.region === selectedRegion})}

    const onCountrySelected = function(country) {
        setSelectedCountry(country)
    };

    const onRegionSelected = function(region) {
        setSelectedRegion(region)
    };

    const handleReset = function(){
        setSelectedRegion("")
        setSelectedCountry(null)
        document.getElementById("default").selected = "true"
        document.getElementById("default2").selected = "true"
    };
    return (
        <section>
            <CountryList handleReset={handleReset} countries={countries} countriesByRegion={countriesByRegion} onCountrySelected={onCountrySelected} onRegionSelected={onRegionSelected} selectedCountry={selectedCountry} />
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </section>
    )
}

export default CountryContainer;
