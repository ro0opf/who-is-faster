import styled from "styled-components";

type IProps = {
    height : string,
}

export const Wrapper = styled.div`
    top:0;
    left:0;
    width:100%;
    position : relative;
    height: ${(props:IProps) => props.height};
    font-family: '나눔바른고딕','Nanum Barun Gothic','Noto Sans KR','Malgun Gothic';
    display : flex;
    flex-direction : column;
    align-items : center;

    & > div.user-rank {
        display : flex;
        justify-content : center;
        flex : 0;
        width : 100%;
    }

    & > div.btn-game-start {
        display : flex;
        width : 100%;
        flex : 1;
        justify-content : center;
        align-items : center;
    }
`;