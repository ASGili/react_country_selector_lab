import '../containers/CountriesContainer.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CountryDetail = ({country}) => {
    let lat = country.latlng[0]
    let long = country.latlng[1]
    const center = [lat,long]

    const MapChange = ()=>{
      const map = useMap()
      map.setView(center)
    }
    return (
      <section>
      <div>
        The capital of {country.name.common} is {country.capital}. 
        <br/>
        Population: {country.population}.
        <br/>
      <MapContainer style={{ height: 400, width: 400 }} center={center} zoom={6} scrollWheelZoom={false}>
      <MapChange />
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </MapContainer>
      </div>
      </section>
    )
}
  
export default CountryDetail;