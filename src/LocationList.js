import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const LocationList = ({filterByLocation}) => {
  const listOfLocations = ["San Francisco", "Los Angeles", "Santa Clara"];
  const locationNames = listOfLocations.map((elem)=>{
    return <DropdownItem key={elem} value={elem} className="location" onClick={filterByLocation}>{elem}</DropdownItem>
  })
  return (
    <li>
          {locationNames}
    </li>
  )
}
export default LocationList;
