import React from 'react';


const CountryList = ({countries, countriesByRegion, onCountrySelected, onRegionSelected}) => {

    const countryOptions = countriesByRegion.map((country, index) => {
      return <option key={index} value={index}>{country.name.common} {country.flag}</option>
    })

    const regionMap = countries.map((country)=> {
      return country.region})

    const regionList = [... new Set(regionMap)];
    
    const regionOptions = regionList.map((region)=>{return <option>{region}</option>});

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
      <select onChange={handleRegionSelect}>
      <option selected disabled>All Continents</option>
      {regionOptions}
      </select>
      <select onChange={handleCountrySelect}>
        {countryOptions}
      </select>
   </section>
  )
}

export default CountryList;