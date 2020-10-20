import React from 'react';
import {Wrapper} from './ButtonBigRounded.css';

type btnProps = {
    name : string,
    onClick : React.MouseEventHandler<HTMLButtonElement>
}

function ButtonBigRounded({name, onClick} : btnProps) {
    return (
        <Wrapper>
            <button className="btn-start" onClick={onClick}>
                {name}
            </button>
        </Wrapper>
    )
}

export default ButtonBigRounded;