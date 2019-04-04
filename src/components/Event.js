import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class Event extends Component {  
    constructor(props){
        super(props);
    }

    createEvent(event){
        // retun a div with name, img(if any), description (if any), and link to EB page
        if(!!event.logo && !!event.description.text){
            // if there is a logo & a description
            return(
                <Card>
                    <Card.Img variant="top" src={event.logo.url} />
                    <Card.Body>
                        <Card.Title>{event.name.text}</Card.Title>
                        <Card.Text>{event.description.text}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href={event.url}>Tickets & More Info</a></small>
                    </Card.Footer>
                </Card>
            )
        }else if(!event.logo && !!event.description.text){
            //if there's a description, but no logo
            return(
                <Card>
                    <Card.Body>
                        <Card.Title>{event.name.text}</Card.Title>
                        <Card.Text>{event.description.text}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href={event.url}>Tickets & More Info</a></small>
                    </Card.Footer>
                </Card>
            ) 
        }else if(!!event.logo && !event.description.text){
            // if there's a logo, but no description
            return(
                <Card>
                    <Card.Img variant="top" src={event.logo.url} />
                    <Card.Body>
                        <Card.Title>{event.name.text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href={event.url}>Tickets & More Info</a></small>
                    </Card.Footer>
                </Card>
            )
        }else{
            //there's no logo & no description
            return(
                <Card>
                    <Card.Body>
                        <Card.Title>{event.name.text}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href={event.url}>Tickets & More Info</a></small>
                    </Card.Footer>
                </Card>
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