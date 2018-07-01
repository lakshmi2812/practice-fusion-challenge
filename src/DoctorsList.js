import React from 'react';
import EachDoctor from './EachDoctor';

//Component to display all listings
const DoctorsList = ({listOfDoctors}) => {
  const doctorsList = listOfDoctors.map((doc)=>{
    return (
      <div className="col-sm-4">
        <EachDoctor doc={doc} key={doc.id}/>
      </div>
    )
  })
  return(
    <div className="row">
      {doctorsList}
    </div>
  )
}

export default DoctorsList;
