import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputField = styled.div`
  position: fixed;
  width: 90%;
  height: 48px;
  top: 32px;
  z-index: 10;
`;

function MainTemplate(props) {
  console.log(props.children);
  return (
    <Container>
      <InputField>
        {props.children.filter((child) => child.type.name === "SearchBar")}
      </InputField>
      {props.children.filter((child) => child.type.name === "GoogleMap")}
    </Container>
  );
}

export default MainTemplate;
