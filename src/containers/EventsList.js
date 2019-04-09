import React, {Component} from 'react';
import Event from '../components/Event';
import CardColumns from 'react-bootstrap/CardColumns';

class EventsList extends Component {  
  createEvents = () => {
    if(this.props.events[0] === 0){
      console.log('No matching events! make me an alert')
    }else{
      return (
        this.props.events.map(event =>
            <Event 
              key={event.id}
              event={event}
            />
          )
      )
    }
    
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