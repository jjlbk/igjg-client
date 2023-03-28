import { Crosshair, Users, Book } from "react-feather";
import { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  padding: 4px;
  border-radius: 24px;
  filter: drop-shadow(0px 4px 4px #cecece);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: white;
  border: none;
`;

function Toggle({ fetchDemographics, fetchPolicies }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = (e) => {
    setHovering((before) => true);
  };

  const handleMouseLeave = (e) => {
    setHovering((before) => false);
  };

  return (
    <ToggleWrapper>
      <Button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        hovering
      >
        <Crosshair />
      </Button>
      <Button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        hovering
      >
        <Users />
      </Button>
      <Button
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        hovering
      >
        <Book />
      </Button>
    </ToggleWrapper>
  );
}

export default Toggle;
