import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {




  return <li>{country.name.common}</li>
}

export default ListItem;