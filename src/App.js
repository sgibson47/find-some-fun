import React, { Component } from 'react';
import './App.css';
import EventForm from './components/Form';
import EventsList from './containers/EventsList';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import MyMap from './components/MyMap';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      events: [],
      location: {
        lat: 51.505,
        long: -0.09
      },
      alert: null,
      hasUserLocation: false,
      venues: []
    };
    this.searchEB = this.searchEB.bind(this);
    this.addWarning = this.addWarning.bind(this)
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) =>{
      this.setState({
        location:{
          lat: position.coords.latitude,
          long: position.coords.longitude
        },
        hasUserLocation: true
      })
    }, () =>{
      fetch('https://ipapi.co/json')
        .then(response => response.json())
        .then((location)=>{
          this.setState({
            location:{
              lat: location.latitude,
              long: location.longitude
            },
            hasUserLocation: true
          })
        })
    })
  }

  addWarning(message) {
    this.setState({
      alert: (<Alert dismissible variant="warning" onClose={() => this.removeWarning()}>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>)
    })
  }

  removeWarning(){
    this.setState({alert: null})
  }

  searchEB(eventKeyword, category){
    const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
    const keywordString = eventKeyword.split(" ").join('+')
    this.clearVenues();
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${keywordString}&location.latitude=${this.state.location.lat}&location.longitude=${this.state.location.long}&categories=${category}&token=${auth_token}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.events.length === 0){
          this.addWarning(`Eventbrite doesn't have any events that match your search.`)
        }else{
          this.setState({events: data.events});
          this.findVenueLocations();
        }
      })
  }

  findVenueLocations(){
    const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
    if(this.state.events.length > 0){
        this.state.events.forEach((event)=>{
          const venue_id = event.venue_id  
            fetch(`https://www.eventbriteapi.com/v3/venues/${venue_id}/?token=${auth_token}`)
                .then(response => response.json())
                .then(data => {
                    data["event_id"] = event.id;
                    data["event_name"] = event.name.text
                    this.addVenueToState(data)
                })
        })
    }
  }

  addVenueToState(venue){
    this.setState(prevState =>{
      // with spread  
      // const newVenues = [...prevState.venues, venue]
      // const newVenues = [venue, ...prevState.venues]
      // with .concat()
      const newVenues = prevState.venues.concat([venue])
      return {venues: newVenues}
    })
  }

  clearVenues(){
    this.setState({venues: []})
  }

  addAppContents(){
    return(
        <>
          <EventForm searchEB={this.searchEB} addWarning={this.addWarning}/>
          {this.state.alert}
          <MyMap 
            lat={this.state.location.lat} 
            long={this.state.location.long} 
            hasUserLocation={this.state.hasUserLocation}
            venues={this.state.venues}
          />
          <br />
          <EventsList events={this.state.events} addWarning={this.addWarning}/>
        </>
    )
  }
  
  render() {
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Find Some Fun</Navbar.Brand>
        </Navbar>
        <br/>
        {this.addAppContents()}
        <br/>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>© Sam Gibson 2019</Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}

export default App;
