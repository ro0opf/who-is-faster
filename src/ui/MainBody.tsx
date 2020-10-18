import React from 'react';
import {Wrapper} from './MainBody.css';
import ButtonBigRounded from '../components/ButtonBigRounded';

type bodyProps = {
    height : string,
}


function MainBody({height} : bodyProps) {
    return (
        <Wrapper height={height}>
            <ButtonBigRounded name="Game Start"></ButtonBigRounded>
        </Wrapper>
    )
}

export default MainBody;