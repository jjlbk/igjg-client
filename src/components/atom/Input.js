import styled from "styled-components";

const InputTag = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 8px;
  border: 0px;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px #cecece);
  outline:none;
  font-size: 14px;
`;

function Input({setSearch}) {

  const handleChange=(e)=> {
    setSearch(value => e.target.value)
  }

  return <InputTag placeholder="검색어를 입력해주세요" onChange={handleChange}/>;
}

export default Input;
