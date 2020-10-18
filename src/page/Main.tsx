import React from 'react';
import {Wrapper} from './Main.css';
import MainBody from '../ui/MainBody';
import MainIp from 'ui/MainIp';

function Main() {
    return (
        <Wrapper>
            <MainIp height="20%"/>
            <MainBody height="80%"/>
        </Wrapper>
    )
}

export default Main;