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

    & > div.btn-game-start {
        display : flex;
        justify-content : center;
    }
`;