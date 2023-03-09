import MainTemplate from "components/template/MainTemplate";
import GoogleMap from "components/atom/Map";
import SearchBar from "components/molecule/SearchBar";

function Main() {
  return (
    <MainTemplate>
      <SearchBar />
      <GoogleMap />
    </MainTemplate>
  );
}

export default Main;
