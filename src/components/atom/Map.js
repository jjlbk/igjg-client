import GoogleMapReact from "google-map-react";

function GoogleMap() {
  const mapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        {
          stylers: [
            { saturation: -100 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: "on" },
          ],
        },
      ],
    };
  };

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
        options={mapOptions}
      />
    </div>
  );
}

export default GoogleMap;
