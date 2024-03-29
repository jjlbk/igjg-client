import GoogleMapReact from "google-map-react";
import MapMarker from "components/atom/MapMarker";

import db from "utils/firebase";
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
      const locations = result.docs.map((doc) => doc.data());
      setLocations(() => locations);
      console.log(locations);
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    getMarkPosition();
  }, []);

  return (
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
            lat={location.placedAt._lat}
            lng={location.placedAt._long}
            text={location.id}
            tooltip={location.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
