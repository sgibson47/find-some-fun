import React, {Component} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import '../App.css';

class MyMap extends Component{
    constructor(props){
        super(props)
        this.state = {
            lat: this.props.lat,
            lng: this.props.long,
            zoom: 13,
            hasUserLocation: this.props.hasUserLocation
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.hasUserLocation !== this.props.hasUserLocation){
            this.setState({
                lat: nextProps.lat,
                lng: nextProps.long,
                hasUserLocation: nextProps.hasUserLocation
            });
        }
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
                    {/* <Marker position={position}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                </Map>
            </div>
            
        )
    }

}

export default MyMap; 