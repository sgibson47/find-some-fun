import React, {Component} from 'react';
import Event from '../components/Event';
import CardColumns from 'react-bootstrap/CardColumns';

class EventsList extends Component {  
  createEvents = () => {
    return (
      this.props.events.map(event =>
          <Event 
            key={event.id}
            event={event}
          />
        )
    )
  }
  render(){
    return(
      <CardColumns className="EventsList">
        {this.createEvents()}
      </CardColumns>
    )
  }
}

export default EventsList;