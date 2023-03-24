import React from "react";
import { MapPin } from "react-feather";
import { useState } from "react";

const MapMarker = () => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = (e) => {
    setHover(true);
  };

  const handleMouseLeave = (e) => {
    setHover(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <MapPin color="black" size={hover ? 28 : 24} />
    </div>
  );
};

export default MapMarker;
