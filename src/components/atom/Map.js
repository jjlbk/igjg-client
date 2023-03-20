import GoogleMapReact from "google-map-react";
import MapMarker from "components/atom/MapMarker";

function GoogleMap() {
  const mapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      zoomControl:false,
      fullscreenControl: false,
    };
  };

  const defaultProps = {
    center: {
      lat: 37.541,
      lng: 126.986,
    },
    zoom: 12,
  }; 

  const locations = [ 
    {id: 1, name: "Seoul", lat: 37.541, lng: 126.986},
    {id: 2, name: "Goyang", lat: 37.6583599, lng: 126.8320201},
    {id: 3, name: "Yongin", lat: 37.2410864, lng: 127.1775537},
  ];
    

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB4aBOly0NU_jN5q_k_50R5YBjicfem_-0'}} //process.env.REACT_APP_GOOGLE_MAP_KEY
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapOptions}
      >
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            text={location.id}
            tooltip={location.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
