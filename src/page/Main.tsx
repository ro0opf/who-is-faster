import React, { useEffect, useState } from 'react'
import {Wrapper} from './Main.css'
import MainBody from '../ui/MainBody'
import MainHeader from 'ui/MainHeader'

const BEFORE_START = 0
const READY_TO_START = 1
const START_GAME = 2
const END_GAME = 3

function Main() {
    const [gameState, setGameState] = useState<number>(0)
    const [red, setRed] = useState<string>('0')
    const [blue, setBlue] = useState<string>('0')
    const [green, setGreen] = useState<string>('0')
    const [alpha, setAlpha] = useState<string>('0.95')
    const [startTime, setStartTime] = useState<number>(0)
    const [score, setScore] = useState<number>(0)


    function BtnGameStartOnClick(){
        setGameState(READY_TO_START)
    }

    function Countdown(){
        const [countdown, setCountdown] = useState(3)

        useEffect(() => {
            if (!countdown){
                StartGame()
                return
            }
        
            const intervalId = setInterval(() => {
                setCountdown(countdown - 1)
            }, 1000)
        
            return function CleanUp(){
                clearInterval(intervalId)
            }
        }, [countdown])

        return(
            <div className="div-countdown">
                <p>
                    {countdown !== 0 ? countdown : null}
                </p>
            </div>
        )
    }

    function StartGame(){
        const min = 1000
        const max = 5000
        const gameTime = min + Math.random() * (max - min)

        setTimeout(()=>{
            setStartTime(new Date().getTime())
            setGameState(START_GAME)
            
            const min = 0
            const max = 255
            const red = min + Math.random() * (max - min)
            const blue = min + Math.random() * (max - min)
            const green = min + Math.random() * (max - min)
            const alpha = Math.random()

            setRed(red.toString())
            setBlue(blue.toString())
            setGreen(green.toString())
            setAlpha(alpha.toString())
        }, gameTime)
    }
    
    function CatchByUser(){
        const endTime = new Date().getTime()
        setScore(endTime - startTime)
        setGameState(END_GAME)
    }

    switch (gameState) {
        case BEFORE_START:
            return (
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    <MainHeader height="50%"/>
                    <MainBody height="50%" btnGameStartOnClick={BtnGameStartOnClick}/>
                </Wrapper>
            )
        case READY_TO_START:
            return(
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    <Countdown/>
                </Wrapper>
            )
        case START_GAME:
            return(
                <Wrapper red={red} green={green} blue={blue} alpha={alpha} onClick={CatchByUser}>
                </Wrapper>
            )
        case END_GAME:
            return(
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
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