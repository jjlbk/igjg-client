import React from "react";
import { Circle } from "react-feather";
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
      <Circle fill="black" size={hover ? 20 : 16} />
    </div>
  );
};

export default MapMarker;
