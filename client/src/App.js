import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import EventsList from './containers/EventsList'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      events: []
    };
  }

  searchEB(eventKeyword, category){
    const auth_token = `HYZOE7FG2CUN6U3Y66B4`
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventKeyword}&categories=${category}&token=${auth_token}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }
  
  render() {
    return(
      <>
        <Form searchEB={this.searchEB}/>
        <EventsList events={this.state.events} />
      </>
    );
  }
}

export default App;
