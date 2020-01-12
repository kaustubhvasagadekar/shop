import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

 
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 17.385044,
      lng: 78.486671
    },
    zoom: 13
  };
 
  render() {
    return (
  
      <div style={{ height: '50vh', width: '50vh', padding: '3%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCYFvSniAle3Xa5S4YZBY4sASVSatsc5PU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.055413}
            lng={20.037844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;