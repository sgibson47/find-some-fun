import React, {Component} from 'react';

class Event extends Component {  
  render(){
    return(
        <div className="Event">
            <h2>{this.props.event.name.text}</h2>
        </div>
    )
  }
}

export default Event;