import GNB from "components/molecule/GNB";
import HeaderBar from "components/molecule/HeaderBar";
import KeywordTemplate from "components/template/keywordTemplate";

function KeywordGraph() {
  return (
    <KeywordTemplate>
      <HeaderBar />
      <GNB />
    </KeywordTemplate>
  )
}

export default KeywordGraph;
