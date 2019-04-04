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
    this.searchEB = this.searchEB.bind(this);
  }

  searchEB(eventKeyword, category){
    const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
    const keywordString = eventKeyword.split(" ").join('+')
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${keywordString}&categories=${category}&token=${auth_token}`)
      .then(response => response.json())
      .then(data => this.setState({events: data.events}))
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
