import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      events: []
    }
  }

  componentDidMount(){
    fetch('')
  }

  render() {
    let {events} = this.state

    return(<div>Hello</div>);
  }
}

export default App;
