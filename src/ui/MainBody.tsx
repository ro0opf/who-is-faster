import React from 'react';
import {Wrapper} from './MainBody.css';
import ButtonBigRounded from '../components/ButtonBigRounded';

type bodyProps = {
    height : string,
    btnGameStartOnClick : React.MouseEventHandler<HTMLButtonElement>
}


function MainBody({height, btnGameStartOnClick} : bodyProps) {
    return (
        <Wrapper height={height}>
            <ButtonBigRounded name="Game Start" onClick={btnGameStartOnClick}/>
        </Wrapper>
    )
}

export default MainBody;