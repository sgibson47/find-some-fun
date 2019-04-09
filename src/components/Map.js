import React, {Component} from 'react';

class Map extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat: 51.505,
            long: -0.09,
            zoom: 13
        }
    }

}

export default Map; 