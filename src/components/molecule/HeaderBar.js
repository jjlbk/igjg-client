import styled from "styled-components";

import db from "utils/firebase";
import { collection, getDocs } from "firebase/firestore";

import { useState, useEffect } from "react";

const HeaderBarContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const HeaderName = styled.div`
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  margin-left: 8px;
`;

const DropdownBarContainer = styled.div`
  position: absolute;
  width: 70px;
  height: 70%;
  border-radius: 8px;
  font-size: 10px;
  margin-top: 55px;
  margin-left: 10px;
  outline: none;
`;

const Select = styled.select`
  position: absolute;
  width: 80px;
  height: 80%;
  border-radius: 4px;
  font-size: 14px;
`;

function pickGraph() {
  //dropdown bar에서 선택한 지역에 따라 그래프가 바뀌도록 구현

}

function DropdownBar({locations}) {
  return(
    <DropdownBarContainer>
        <Select name="country">
          {locations.map((location, idx) => (<option key={idx} value={location.name}>{location.name}</option>))}
        </Select>
    </DropdownBarContainer>
  )
};

function HeaderBar() {

  const[locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
  
      const locationsRef = collection(db, "regions");
      const locationsSnapshot = await getDocs(locationsRef);
      const locationsList = locationsSnapshot.docs.map((doc) => doc.data());
      setLocations(location => locationsList)

      console.log(locations)
    }
    getLocations();

  }, []);

  return (
  <HeaderBarContainer>
    <HeaderName>키워드 그래프</HeaderName>
    <DropdownBar locations={locations} />
  </HeaderBarContainer>
  )
}

export default HeaderBar;