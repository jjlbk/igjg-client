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

const ImageField = styled.div`
  position: absolute;
  width: 368px;
  height: 368px;
  top: 120px;
  left: 50px;
`;

const ChartField = styled.div`
  position: relative;
  width: 368px;
  height: 368px;
  top: 120px;
`;

function KeywordTemplate(props) {
    return (
      <Mobile>
        <Container>
          <HeaderBarField>
            {props.children.filter((child) => child.type.name === "HeaderBar")}
          </HeaderBarField>
          <ImageField>
            {props.children.filter((child) => child.type.name === "GraphImage")}
          </ImageField>
          <chartField>
            {props.children.filter((child) => child.type.name === "ChartBar")}
          </chartField>
          <GNBField>
            {props.children.filter((child) => child.type.name === "GNB")}
          </GNBField>
        </Container>
      </Mobile>
    );
  }
  
  export default KeywordTemplate;