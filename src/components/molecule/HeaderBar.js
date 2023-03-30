import styled from "styled-components";
import { X } from "react-feather";

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
  width: 250px;
  height: 80%;
  margin-top: 55px;
  margin-left: 10px;
  outline: none;
`;

const Select = styled.select`
  position: absolute;
  width: 100px;
  height: 80%;
  border-radius: 4px;
  font-size: 14px;
`;

const PickRegion = styled.div`
  display: flex;
  position: absolute;
  margin-left: 110px;
  height: 75%;
  border-radius: 4px;
  text-align: left;
  padding: 0px 20px 0px 10px;
  font-size: 14px;
  background-color: #ff9f6c;
`;

const Button = styled.button`
  position: absolute;
  right: 9px;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0);
  border: none;
`;

function DeleteButton(props) {
  const {icon, onClick} = props;
  return (
    <Button onClick={onClick}>
      {icon} 
    </Button>
  );
}

function SelectRegion() {
  //= (event) =>
  //dropdown bar에서 선택한 지역에 따라 그래프가 바뀌도록 구현
  // this.setState({selectedRegion: event.target.value});
}

function removeRegion() {
  //선택한 지역을 지우는 함수
}

function DropdownBar({locations}) {
  return(
    <DropdownBarContainer>
        <Select name="country">
          {locations.map((location, idx) => (<option key={idx} value={location.name}>{location.name}</option>))}
        </Select>
        <PickRegion style={{ color: 'white'}}>수원시<DeleteButton icon={<X size={15} />} onClick={removeRegion}/></PickRegion> 
        {/* {state.selectedRegion} */}
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