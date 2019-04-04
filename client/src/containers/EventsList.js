import React, {Component} from 'react';
import Event from '../components/Event'

class EventsList extends Component {  
  createEvents = () => {
    return this.props.events.map(event =>
          <Event 
            // details about each event
          />
        )
    }
  render(){
    return(
      <div className="EventsList">
        <div className="Event">
          {this.createEvents()}
        </div>
      </div>
    )
  }
}

export default EventsList;