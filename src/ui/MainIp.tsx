import React, { useEffect, useState } from 'react';
import {Wrapper} from './MainIp.css';
import axios from 'axios';

type bodyProps = {
    height : string,
}

function MainIp({height} : bodyProps) {
    const [ip, setIp] = useState<string>();
    
    useEffect(() =>{
        async function fetchData(){
            const result = await axios(
                'https://api.ipify.org/?format=json'
            );

            setIp(result.data.ip);
        }
        fetchData();
    }, []);

    return (
        <Wrapper height={height}>
            <div>
                {ip}
            </div>
        </Wrapper>
    )
}

export default MainIp;