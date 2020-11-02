import React, { } from 'react';
import { Wrapper } from './MainHeader.css';

type IProps = {
    height: string,
}

function MainHeader({ height }: IProps) {
    return (
        <Wrapper height={height}>
            <div className="title">
                Who is faster?
            </div>
        </Wrapper>
    )
}

export default MainHeader;