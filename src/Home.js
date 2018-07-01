import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import doctors from './doctors.json';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LocationList from './LocationList.js';
import SpecialtyList from './SpecialtyList.js';
import DoctorsList from './DoctorsList.js';
import RatingsList from './RatingsList.js';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      doctors:doctors,
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false
    }
  }

  toggle1 = () => {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  }

  toggle2 = () => {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }

  toggle3 = () => {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3
    });
  }


  filterByCategory = (e) => {
    e.preventDefault();
    const val = e.target.value;
    const category = e.target.className.split(" ")[0];
    console.log(category);
    let filteredByCategory = val?doctors.filter(d=>d[category]===val):doctors;
    fetch('doctors.json')
    .then((json) => {
      this.setState({doctors:filteredByCategory})
      console.log('response json: ', this.state.doctors)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid heading">
          <h1 className="display-3">Similar Doctors</h1>
        </div>
        <div className="container">
          <div className="row">
            <ul className="nav navbar-nav navbar-expand ml-auto col-sm-12 green">
              <div className="col-sm-1">
              </div>
                  <ul>
                    <div className="col-sm-3">
                    <ButtonDropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                      <DropdownToggle caret>
                        Sort By Location
                      </DropdownToggle>
                      <DropdownMenu>
                        <LocationList filterByLocation={this.filterByCategory}/>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                  </ul>
                  <div className="col-sm-1">
                  </div>
                  <div className="col-sm-3">
                  <ul>
                    <ButtonDropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                      <DropdownToggle caret>
                        Sort By Specialty
                      </DropdownToggle>
                      <DropdownMenu>
                        <SpecialtyList filterBySpecialty={this.filterByCategory}/>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ul>
                </div>
              <div className="col-sm-1">
              </div>
              <div className="col-sm-3">
                <ButtonDropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                  <DropdownToggle caret>
                    Sort By Ratings
                  </DropdownToggle>
                  <DropdownMenu>
                    <RatingsList filterByRating={this.filterByCategory}/>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
          </ul>
        </div>
          <br /><br />
          <div className="container">
            <DoctorsList listOfDoctors={this.state.doctors}/>
          </div>
      </div>
    </div>
    )
  }
}

export default Home;
