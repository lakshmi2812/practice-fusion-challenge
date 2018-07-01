import React, {Component} from 'react';
import doctors from './doctors.json';


export default class DoctorDetails extends Component{
  constructor(props){
    super(props)
    this.props = props;
    this.state={
      doctors:doctors
    }
  }

  //Code to filter doctors from the same location
  componentDidMount() {
    let doc = this.state.doctors.filter( t => t.id == this.props.match.params.id)[0];
    let _location = doc.location;
    let doctorsFromSameLocation = _location?doctors.filter(d=>d.location===_location):doctors;
    fetch('doctors.json')
    .then((json) => {
      this.setState({doctors:doctorsFromSameLocation})
      console.log('response json: ', this.state.doctors)
    })
  }

  render(){
    let doc = this.state.doctors.filter( t => t.id == this.props.match.params.id)[0];
    //for testing
    console.log(this.props.match.params.id);
    console.log("doc: ",doc);
    //
    const similarDoctors = this.state.doctors.map((doc)=>{
      return (
        <div className="col-xs-12 col-sm-3">
          <img src={doc.img} width="200" height="200"/>
          <h5>{doc.name}</h5>
          <h5><b><i>Specialty:</i></b> {doc.specialty}</h5>
        </div>
      )
    });
    //testing
    console.log("similar doctors:", similarDoctors);
    //
    return(
      <div className="container">
        <br /><br />
          <div className="row">
            <div className="col-md-4">
              <img src={doc.img} width="300" height="300" />
              <h2>{doc.name}</h2>
            </div>
            <div className="col-md-6">
              <p><b><i>Specialty:</i></b> {doc.specialty}</p>
              <p><b><i>Location:</i></b> {doc.location}</p>
              <p><b><i>Rating:</i></b> {doc.rating}</p>
            </div>
          </div>
          <br /><br />
          <h3>Other doctors from <span><b>{doc.location}</b></span></h3>
          <div className="row">
            {similarDoctors}
          </div>
      </div>
    )
  }
}
