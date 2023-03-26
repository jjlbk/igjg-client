import styled from "styled-components";
import Input from "components/atom/Input";
import { Search } from "react-feather";
import { useState } from "react";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 16px;
  & :hover {
    cursor: pointer;
  }
`;

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <SearchBarContainer>
      <Input setSearch={setSearch} />
      <SearchIconContainer>
        <Search />
      </SearchIconContainer>
    </SearchBarContainer>
  );
}

export default SearchBar;
