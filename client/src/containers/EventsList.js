import React, {Component} from 'react';
import Event from '../components/Event'

class EventsList extends Component {  
  createEvents = () => {
    return (
      this.props.events.map(event =>
          <div>{event.name.text}</div>
        )
    )
  }
  render(){
    return(
      <div className="EventsList">
          {this.createEvents()}
      </div>
    )
  }
}

export default EventsList;