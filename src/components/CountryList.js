import React from 'react';
import CountrySelect from './CountrySelect';
import RegionSelect from './RegionSelect';
import ResetButton from './ResetButton';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'


const CountryList = ({countries, countriesByRegion, onCountrySelected, onRegionSelected,handleReset}) => {


    const regionMap = countries.map((country)=> {
      return country.continents[0]})

    const regionList = [... new Set(regionMap)];

    const handleCountrySelect = function(event) {
      const countryIndex = event.target.value
      const filteredCountries = countriesByRegion.filter((country) => {
        return countryIndex == countriesByRegion.indexOf(country)
      })
      const filteredCountry = filteredCountries[0]
      onCountrySelected(filteredCountry)
    };

    const handleRegionSelect = function(event) {
      const selectedRegion = event.target.value
      onRegionSelected(selectedRegion)
    };

  return ( 
    <section className="main-container">
      <RegionSelect handleRegionSelect={handleRegionSelect} regionList={regionList}/>
      <CountrySelect countries={countries} countriesByRegion={countriesByRegion} onRegionSelected={onRegionSelected} handleCountrySelect={handleCountrySelect}/>
      <ResetButton handleReset={handleReset}/>
   </section>
  )
};

export default CountryList;