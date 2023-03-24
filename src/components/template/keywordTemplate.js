import styled from "styled-components";

const Mobile = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
  border-left: 1px solid #cecece;
  border-right: 1px solid #cecece;
`;

const HeaderBarField = styled.div`
  position: absolute;
  width: 368px;
  height: 36px;
  top: 20px;
`;

const GNBField = styled.div`
  position: fixed;
  bottom: 32px;
  width: 368px;
  height: 48px;
  z-index: 10;
`;

function KeywordTemplate(props) {
    return (
      <Mobile>
        <Container>
          <HeaderBarField>
            {props.children.filter((child) => child.type.name === "HeaderBar")}
          </HeaderBarField>
          <GNBField>
            {props.children.filter((child) => child.type.name === "GNB")}
          </GNBField>
        </Container>
      </Mobile>
    );
  }
  
  export default KeywordTemplate;

  //https://yozm.wishket.com/magazine/detail/1302/