import styled from "styled-components";

type IProps = {
    height : string,
}

export const Wrapper = styled.div`
    top:0;
    left:0;
    width:100%;
    height: ${(props:IProps) => props.height};
    background : #343434;
    font-family: '나눔바른고딕','Nanum Barun Gothic','Noto Sans KR','Malgun Gothic';
`;