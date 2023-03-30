import styled from "styled-components";
import { ArrowDown } from "react-feather";

const ChartBarContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 95%;
    height: 40%;
    left: 30px;
    bottom: 110px;
    border-radius: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    //background-color: red;
    //filter: drop-shadow(0px 4px 4px #cecece);
`;

const ChartHeaderName = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Ranking = styled.div`
    font-size: 15px;
    margin-top: 10px;
`;

function ChartBar() {
    return (
        <ChartBarContainer>
            <ChartHeaderName> 키워드 100 </ChartHeaderName>
            <Ranking> 1. 복지 </Ranking>
            <Ranking> 2. 복지 </Ranking>
            <Ranking> 3. 복지 </Ranking>
            <Ranking> 4. 복지 </Ranking>
            <Ranking> 5. 복지 </Ranking>
            <Ranking> 6. 복지 </Ranking>
            <Ranking> 7. 복지 </Ranking>
            <Ranking> 8. 복지 </Ranking>
            <Ranking> 9. 복지 </Ranking>
            <Ranking> 10. 복지 </Ranking>
            <Ranking> 11. 복지 </Ranking>
            {/* <ArrowDown /> */}
        </ChartBarContainer>
    );
}

export default ChartBar;