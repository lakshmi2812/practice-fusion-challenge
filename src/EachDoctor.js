import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

const eachDoctor = ({doc}) => {
  const {img, name} = doc;
  return (
    <div>
      <Link to={`doctor/${doc.id}`}><img src={doc.img} width="300" height="300"/></Link>
      <p>{doc.name}</p>
    </div>
  )
}

export default eachDoctor;
