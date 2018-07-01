import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const RatingsList = ({filterByRating}) => {
  const listOfRatings = [3,4,5];
  const ratings = listOfRatings.map((elem)=>{
    return <DropdownItem key={elem} value={elem} className="rating" onClick={filterByRating}>{elem}</DropdownItem>
  })
  return (
    <li>
          {ratings}
    </li>
  )
}
export default RatingsList;
