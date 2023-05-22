import '../containers/CountriesContainer.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CountryDetail = ({country}) => {
    

    return (
      <div className="country-detail">
        The capital of {country.name.common} is {country.capital}. 
        <br/>
        Population: {country.population}.
        <br/>
        <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
      </div>
    )
}
  
export default CountryDetail;