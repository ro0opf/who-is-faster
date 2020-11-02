import styled from "styled-components";

type IProps = {
    red? : string,
    green? : string,
    blue? : string,
    alpha? : string
}

export const Wrapper = styled.div`
    top:0;
    left:0;
    width:100%;
    height:100%;
    background : rgba(${(props : IProps) => props.red}, ${(props : IProps) => props.green}, 
                ${(props : IProps) => props.blue}, ${(props : IProps) => props.alpha}); 
    font-family: '나눔바른고딕','Nanum Barun Gothic','Noto Sans KR','Malgun Gothic';

    & > div.div-countdown {
        width : 100%;
        height : 100%;
        display : table;
    }

    & > div.div-countdown > p {
        color : white;
        font-size : 150px;
        text-align : center;
        vertical-align : middle;
        display : table-cell;
    }

    & > div.form {
        display : flex;
        width : 100%;
        height : 100%;
        justify-content : center;
        align-items : center;
    }
`;