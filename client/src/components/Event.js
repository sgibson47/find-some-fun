import React, {Component} from 'react';

class Event extends Component {  
    constructor(props){
        super(props);
    }

    createEvent(event){
        // retun a div with name, img(if any), description (if any), and link to EB page
        return(
            <div className="Event">
                <h2>{event.name.text}</h2>
                <a href={event.url}>Tickets & More Info</a>
            </div>
        )
    }

    render(){
        return(
            this.createEvent(this.props.event)
        )
    }
}

export default Event;