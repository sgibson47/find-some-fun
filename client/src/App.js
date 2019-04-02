import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      events: [],
      isLoaded: false
    }
  }

  render() {
    let {events, isLoaded} = this.state

    if(!isLoaded){
      return <div>Loading</div>
    }else{
      return (
        <div className="App">
          Hello World
        </div>
      );
    }
    
  }
}

export default App;
