import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 8px;
  border-radius: 12px;
  font-size: 18px;
`;

function Input() {
  return <InputField placeholder="검색어를 입력해주세요" />;
}

export default Input;
