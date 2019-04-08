import React, { Component } from 'react';
import './App.css';
import EventForm from './components/Form';
import EventsList from './containers/EventsList';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      events: [],
      location: {
        lat: 51.505,
        long: -0.09
      }
    };
    this.searchEB = this.searchEB.bind(this);
  }

  searchEB(eventKeyword, category){
    const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
    const keywordString = eventKeyword.split(" ").join('+')
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${keywordString}&categories=${category}&token=${auth_token}`)
      .then(response => response.json())
      .then(data => this.setState({events: data.events}))
  }

  addAppContents(){
    return(
        <>
          <EventForm searchEB={this.searchEB}/>
          <EventsList events={this.state.events} />
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
