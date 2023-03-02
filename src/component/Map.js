import React from 'react';
import GoogleMap from "google-map-react";
const Map = () => {
   const defaultProps = {
        center : {
            lat : 10.99835602,
            lng: 77.01502627
        },
        zoom : 11
   }
        return (
            <div style={{height: '100vh', width:'100%'}}>
                <GoogleMap defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}/>  
            </div>
        );
}

export default Map;