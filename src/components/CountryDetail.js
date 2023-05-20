const CountryDetail = ({country}) => {

    return (
      <div className="country-detail">
        The capital of {country.name.common} is {country.capital}. 
        <br/>
        Population: {country.population}.
      </div>
    )
}
  
export default CountryDetail;