import MainTemplate from "components/template/MainTemplate";
import GoogleMap from "components/atom/Map";
import SearchBar from "components/molecule/SearchBar";
import GNB from "components/molecule/GNB";

function Main() {
  return (
    <MainTemplate>
      <SearchBar />
      <GoogleMap />
      <GNB />
    </MainTemplate>
  );
}

export default Main;
