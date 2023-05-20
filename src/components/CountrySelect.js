
const CountrySelect = ({countries, countriesByRegion, handleCountrySelect})=>{
    
    const countryOptions = countriesByRegion.map((country, index) => {
        return <option key={index} value={index}>{country.name.common} {country.flag}</option>
      })

    return (
        <select onChange={handleCountrySelect}>
        <option id="default" reset selected disabled>Choose a Country:</option>
          {countryOptions}
        </select>
    )
};

export default CountrySelect