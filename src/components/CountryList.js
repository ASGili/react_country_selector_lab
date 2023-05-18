import React from 'react';
import ListItem from './ListItem';

const CountryList = ({countries, onCountrySelected}) => {

    const countryOptions = countries.map((country, index) => {
      return <option key={index} value={index}>{country.name.common}</option>
    })


    const handleSelect = function(event) {
      const countryIndex = event.target.value
      const filteredCountries = countries.filter((country) => {
        return countryIndex == countries.indexOf(country)
      })
      const filteredCountry = filteredCountries[0]
      onCountrySelected(filteredCountry)
    }

  return ( 
    <div>
      <select onChange={handleSelect}>
        {countryOptions}
      </select>
   </div>
  )
}

export default CountryList;