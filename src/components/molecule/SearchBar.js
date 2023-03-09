import styled from "styled-components";
import Input from "components/atom/Input";
import { Search } from "react-feather";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  right: 16px;
  & :hover {
    cursor: pointer;
  }
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <Input />
      <SearchIconContainer>
        <Search />
      </SearchIconContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;
