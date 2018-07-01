import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SpecialtyList = ({filterBySpecialty}) => {
  const listOfSpecialties = ["Neurologist", "Cardiologist", "Pediatrician"];
  const specialtyNames = listOfSpecialties.map((elem)=>{
    return <DropdownItem key={elem} value={elem} className="specialty" onClick={filterBySpecialty}>{elem}</DropdownItem>
  })
  return (
    <li>
          {specialtyNames}
    </li>
  )
}
export default SpecialtyList;
