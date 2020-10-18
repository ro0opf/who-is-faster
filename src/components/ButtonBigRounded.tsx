import React from 'react';
import {Wrapper} from './ButtonBigRounded.css';

type btnProps = {
    name : string,
}

function ButtonBigRounded({name,} : btnProps) {
    return (
        <Wrapper>
            <button className="btn-start">
                {name}
            </button>
        </Wrapper>
    )
}

export default ButtonBigRounded;