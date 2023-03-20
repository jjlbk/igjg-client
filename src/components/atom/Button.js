import { useHref } from "react-router-dom";
import styled from "styled-components";

const ButtonField = styled.input`
  width: 150%;
  height: 100%;
  padding: 0px 3px;
  border: none;
  background-color: #ffffff;
`;

function Button() {
    return <ButtonField type="button" />;
}

function Button1Click() {
  //페이지 이동
  //return <ButtonField color="background-color : #ff0000" />
  //return useHref("https://zep.us/play/yO6dQv");
}

function Button2Click() {
}

function Button3Click() {
}

export default Button;