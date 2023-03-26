import MainTemplate from "components/template/MainTemplate";
import GoogleMap from "components/atom/Map";
import SearchBar from "components/molecule/SearchBar";
import GNB from "components/molecule/GNB";
import Toggle from "components/molecule/Toggle";

function Main() {
  return (
    <MainTemplate>
      <SearchBar />
      <GoogleMap />
      <Toggle />
      <GNB />
    </MainTemplate>
  );
}

export default Main;
