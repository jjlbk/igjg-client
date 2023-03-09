import GoogleMapReact from "google-map-react";

function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 37.541,
      lng: 126.986,
    },
    zoom: 8.6,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}

export default GoogleMap;
