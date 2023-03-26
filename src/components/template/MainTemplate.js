import styled from "styled-components";

const Mobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
`;

const InputField = styled.div`
  position: absolute;
  width: 368px;
  height: 40px;
  top: 32px;
  z-index: 10;
`;

const GNBField = styled.div`
  position: absolute;
  bottom: 32px;
  width: 368px;
  height: 48px;
  z-index: 10;
`;

const ToggleField = styled.div`
  position: absolute;
  bottom: 144px;
  right: 20px;
  z-index: 10;
`;

function MainTemplate(props) {
  return (
    <Mobile>
      <Container>
        <InputField>
          {props.children.filter((child) => child.type.name === "SearchBar")}
        </InputField>
        <GNBField>
          {props.children.filter((child) => child.type.name === "GNB")}
        </GNBField>
        <ToggleField>
          {props.children.filter((child) => child.type.name === "Toggle")}
        </ToggleField>
        {props.children.filter((child) => child.type.name === "GoogleMap")}
      </Container>
    </Mobile>
  );
}

export default MainTemplate;
