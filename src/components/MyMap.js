import React, {Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import '../App.css';
import L from 'leaflet';

class MyMap extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat: this.props.lat,
            lng: this.props.long,
            zoom: 2,
            venues: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.hasUserLocation !== prevProps.hasUserLocation) {
            this.setState({
                lat: this.props.lat,
                lng: this.props.long,
                zoom: 15
            });
        }
        if(this.props.events.length !== prevProps.events.length){
            this.findVenueLocations();
        }
    }



    addUserMarker(){
        const position = [this.state.lat, this.state.lng]
        const myIcon = L.icon({
            iconUrl: 'https://cdn2.iconfinder.com/data/icons/eldorado-mobile/40/location_3-512.png',
            iconSize: [50, 45],
            iconAnchor: null,
            popupAnchor: [0, -15]
        });

        if(this.props.hasUserLocation){
            return(
                <Marker 
                    position={position}
                    icon={myIcon}
                >
                    <Popup>
                    You!
                    </Popup>
                </Marker>
            )
        }
    }

    findVenueLocations(){
        const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
        if(this.props.events.length > 0){
            this.props.events.forEach((event)=>{
              const venue_id = event.venue_id  
                fetch(`https://www.eventbriteapi.com/v3/venues/${venue_id}/?token=${auth_token}`)
                    .then(response => response.json())
                    .then(data => {
                        data["event_id"] = event.id;
                        this.addVenueToState(data)
                    })
            })
        }
    }
    
    addVenueToState(venue){
        this.setState(prevState =>{
            const newVenues = prevState.venues.concat([venue])
            return {venues: newVenues}
        })
    }

    addVenueMarkers(){
        const myIcon = L.icon({
            iconUrl: 'https://icla.org/wp-content/uploads/2018/02/blue-location-icon-png-19.png',
            iconSize: [40, 45],
            iconAnchor: null,
            popupAnchor: [0, -15]
        });
        return(
            this.state.venues.map(venue =>{
                return(
                    <Marker 
                        key={venue.id}
                        position={[venue.latitude, venue.longitude]}
                        icon={myIcon}
                    >
                        <Popup>
                        {venue.name}
                        </Popup>
                    </Marker>
                )
            })
        ) 
    }
    
    

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className='map'>
                <Map className='leafMap' center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.addUserMarker()}
                    {this.state.venues.length !== 0 ? this.addVenueMarkers() : null}
                </Map>
            </div>
            
        )
    }

}

export default MyMap; 