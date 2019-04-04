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
  
  render() {
    return(
      <>
        <Form />
        <EventsList events={this.state.events} />
      </>
    );
  }
}

export default App;
