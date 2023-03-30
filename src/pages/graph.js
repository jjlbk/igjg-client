import GraphImage from "components/atom/GraphImage";
import ChartBar from "components/molecule/ChartBar";
import GNB from "components/molecule/GNB";
import HeaderBar from "components/molecule/HeaderBar";
import KeywordTemplate from "components/template/keywordTemplate";

function KeywordGraph() {
  return (
    <KeywordTemplate>
      <HeaderBar />
      <GraphImage />
      <ChartBar />
      <GNB />
    </KeywordTemplate>
  )
}

export default KeywordGraph;
