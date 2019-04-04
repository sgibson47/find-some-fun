import React, {Component} from 'react';

class Event extends Component {  
    constructor(props){
        super(props);
    }

    createEvent(event){
        // retun a div with name, img(if any), description (if any), and link to EB page
        if(!!event.logo && !!event.description.text){
            // if there is a logo & a description
            return(
                <div className="Event">
                    <h2>{event.name.text}</h2>
                    <img src={event.logo.url} alt="Event Logo"/>
                    <p>{event.description.text}</p>
                    <a href={event.url}>Tickets & More Info</a>
                </div>
            )
        }else if(!event.logo && !!event.description.text){
            //if there's a description, but no logo
            return(
                <div className="Event">
                    <h2>{event.name.text}</h2>
                    <p>{event.description.text}</p>
                    <a href={event.url}>Tickets & More Info</a>
                </div>
            ) 
        }else if(!!event.logo && !event.description.text){
            // if there's a logo, but no description
            return(
                <div className="Event">
                    <h2>{event.name.text}</h2>
                    <img src={event.logo.url} alt="Event Logo"/>
                    <a href={event.url}>Tickets & More Info</a>
                </div>
            )
        }else{
            //there's no logo & no description
            return(
                <div className="Event">
                    <h2>{event.name.text}</h2>
                    <a href={event.url}>Tickets & More Info</a>
                </div>
            )
        }
        
        
    }

    render(){
        return(
            this.createEvent(this.props.event)
        )
    }
}

export default Event;