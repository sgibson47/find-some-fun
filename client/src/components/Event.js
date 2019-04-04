import React, {Component} from 'react';

class Event extends Component {  
    constructor(props){
        super(props);
    }

    createEvent(event){
        let div =`<div className="Event"><h2>${event.name.text}</h2>`
        event.logo ? div += `<img src=${event.logo.url}/>` : div +=''
        div+=`<p>${event.description.text}</p></div>`
        return div
    }

    render(){
        return(
            this.createEvent(this.props.event)
        )
    }
}

export default Event;