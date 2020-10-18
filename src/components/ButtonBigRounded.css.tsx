import styled from "styled-components";

export const Wrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    font-family: '나눔바른고딕','Nanum Barun Gothic','Noto Sans KR','Malgun Gothic';

    & > button.btn-start{
        padding: 15px 25px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        border-radius: 15px;
    }

    & > button.btn-start:hover {
        background-color: #3e8e41
    }

    & > button.btn-start:active {
        background-color: #3e8e41;
        transform: translateY(4px);
    }
`;