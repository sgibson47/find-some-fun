import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

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
      </>
    );
  }
}

export default App;
