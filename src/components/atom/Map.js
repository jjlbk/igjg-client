import GoogleMapReact from "google-map-react";
import MapMarker from "components/atom/MapMarker";

import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";

function GoogleMap() {
  const mapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      zoomControl: false,
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

  const [locations, setLocations] = useState([]);

  const getMarkPosition = async () => {
    try {
      const result = await getDocs(collection(db, "regions"));
      const locations = result.docs
        .filter((doc) =>
          Object.keys(doc.data()).some((key) => key === "placedAt")
        )
        .map((doc) => doc.data());
      setLocations(
        locations.map((location) => {
          return {
            lat: location.placedAt._lat,
            lng: location.placedAt._long,
          };
        })
      );
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    getMarkPosition();
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4aBOly0NU_jN5q_k_50R5YBjicfem_-0" }} //process.env.REACT_APP_GOOGLE_MAP_KEY
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
