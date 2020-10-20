import React, { useEffect, useState } from 'react'
import {Wrapper} from './Main.css'
import MainBody from '../ui/MainBody'
import MainIp from 'ui/MainIp'
import { CSSTransition } from 'react-transition-group' 
const BEFORE_START = 0
const READY_TO_START = 1




function Main() {
    const [gameState, setGameState] = useState<number>(0)
    const [red, setRed] = useState<string>('0')
    const [blue, setBlue] = useState<string>('0')
    const [green, setGreen] = useState<string>('0')
    const [alpha, setAlpha] = useState<string>('0.95')
    const [showButton, setShowButton] = useState(true)
    const [showMessage, setShowMessage] = useState(false)
    // useEffect(()=>{
    //     setInterval(() => {
    //         const min = 0
    //         const max = 255
    //         const red = min + Math.random() * (max - min)
    //         const blue = min + Math.random() * (max - min)
    //         const green = min + Math.random() * (max - min)
    //         const alpha = Math.random()

    //         setRed(red.toString())
    //         setBlue(blue.toString())
    //         setGreen(green.toString())
    //         setAlpha(alpha.toString())
    //     }, 5000);
    // },[]);
    function btnGameStartOnClick(){
        setGameState(READY_TO_START)
        setShowMessage(true)
    }

    function countDown(){
        return(
            <div className="div-countdown">
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton(false)}
                    onExited={() => setShowButton(true)}>
                    <p>
                        3
                    </p>
                </CSSTransition>
            </div>
        )
    }

    switch (gameState) {
        case BEFORE_START:
            return (
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    <MainIp height="20%"/>
                    <MainBody height="80%" btnGameStartOnClick={btnGameStartOnClick}/>
                </Wrapper>
            )
        case READY_TO_START:
            return(
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    {countDown()}
                </Wrapper>
            )
        default:
            return (
                <>
                </>
            )
    }
}

export default Main;