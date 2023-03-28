import styled from "styled-components";
import { Share2 } from "react-feather";
import { Home } from "react-feather";
import { User } from "react-feather";

const GNBContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px #cecece);
`;

const MenuIconContainer = styled.div`
  padding: 0px 16px;
  & :hover {
    cursor: pointer;
    color: #ff0000;
  }
`;

function GNB() {
  return (
    <GNBContainer>
      <MenuIconContainer>
        <Share2 />
      </MenuIconContainer>
      <MenuIconContainer>
        <Home />
      </MenuIconContainer>
      <MenuIconContainer>
        <User />
      </MenuIconContainer>
    </GNBContainer>
  );
}

export default GNB;
