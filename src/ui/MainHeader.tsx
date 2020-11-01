import React, { useEffect, useState } from 'react';
import { Wrapper } from './MainHeader.css';
import axios from 'axios';

type IProps = {
    height: string,
}

function MainHeader({ height }: IProps) {
    const [ip, setIp] = useState<string>()
    
    useEffect(() => {
        async function FetchIp() {
            const result = await axios(
                'https://api.ipify.org/?format=json'
            )

            setIp(result.data.ip)
        }
        FetchIp()

        return function CleanUp() {

        }
    }, [])

    return (
        <Wrapper height={height}>
            <div className="title">
                Who is faster?
            </div>
            <div>
                {ip}
            </div>
        </Wrapper>
    )
}

export default MainHeader;