import MainTemplate from "components/template/MainTemplate";
import GoogleMap from "components/atom/Map";
import Search from "components/atom/Search";

function Main() {
  return (
    <MainTemplate>
      <Search />
      <GoogleMap />
    </MainTemplate>
  );
}

export default Main;
