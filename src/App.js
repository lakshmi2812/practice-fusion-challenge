import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import doctors from './doctors.json';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LocationList from './LocationList.js';
import SpecialtyList from './SpecialtyList.js';
import DoctorsList from './DoctorsList.js';
import RatingsList from './RatingsList.js';
import Home from './Home.js';
import DoctorDetails from './DoctorDetails.js';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/doctor/:id" render={(props) => <DoctorDetails {...props} />} />
    </div>
  </Router>
)

export default App;
