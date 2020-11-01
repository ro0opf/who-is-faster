import React, { useEffect, useState } from 'react'
import { Wrapper } from './Main.css'
import MainBody from '../ui/MainBody'
import MainHeader from 'ui/MainHeader'
import { TextField, Button } from '@material-ui/core'
import axios from 'axios'

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
    const [nickname, setNickname] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [ip, setIp] = useState<string>('')

    function BtnGameStartOnClick() {
        setGameState(READY_TO_START)
    }

    function Countdown() {
        const [countdown, setCountdown] = useState(3)

        useEffect(() => {
            if (!countdown) {
                StartGame()
                return
            }

            const intervalId = setInterval(() => {
                setCountdown(countdown - 1)
            }, 1000)

            return function CleanUp() {
                clearInterval(intervalId)
            }
        }, [countdown])

        return (
            <div className="div-countdown">
                <p>
                    {countdown !== 0 ? countdown : null}
                </p>
            </div>
        )
    }

    function StartGame() {
        const min = 1000
        const max = 5000
        const gameTime = min + Math.random() * (max - min)

        setTimeout(() => {
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

    function CatchByUser() {
        const endTime = new Date().getTime()
        setScore(endTime - startTime)
        setGameState(END_GAME)
    }

    async function btnSaveGameResult() {
        const getIp = async () => {
            let ipData = await axios.get('https://api.ipify.org/?format=json')
            setIp(ipData.data.ip)
        }

        const result = () => {
            return new Promise((resolve) => {
                getIp()
            })
        }

        result().then(() => {
            let postData = { 'message': message, 'nickname': nickname, 'record': score, 'ip': ip }
            console.log(postData);
        })


        // ipData.then(()=>{
        //     console.log(123123);

        // });

        // let res = await axios.post('http://116.123.85.116:9999/click/save_rank', { postData });

        // console.log(`Status code: ${res.status}`);
        // console.log(`Status text: ${res.statusText}`);
        // console.log(`Request method: ${res.request.method}`);
        // console.log(`Path: ${res.request.path}`);

        // console.log(`Date: ${res.headers.date}`);
        // console.log(`Data: ${res.data}`);
    }

    switch (gameState) {
        case BEFORE_START:
            return (
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    <MainHeader height="20%" />
                    <MainBody height="80%" btnGameStartOnClick={BtnGameStartOnClick} />
                </Wrapper>
            )
        case READY_TO_START:
            return (
                <Wrapper red={red} green={green} blue={blue} alpha={alpha}>
                    <Countdown />
                </Wrapper>
            )
        case START_GAME:
            return (
                <Wrapper red={red} green={green} blue={blue} alpha={alpha} onClick={CatchByUser}>
                </Wrapper>
            )
        case END_GAME:
            return (
                <Wrapper red={'0'} green={'0'} blue={'0'} alpha={'0.05'}>
                    <div>
                        <form className="adwadaw" noValidate autoComplete="off">
                            <TextField style={{ width: "50%" }} id="outlined-basic" label="Nickname" variant="outlined" onChange={(e) => setNickname(e.target.value)} />
                            <TextField id="outlined-basic" label="Message" variant="outlined" onChange={(e) => setMessage(e.target.value)} />
                        </form>
                        <Button variant="contained" style={{ backgroundColor: "green" }} onClick={btnSaveGameResult}>
                            Game Start
                        </Button>
                    </div>
                    <div>
                        {score}
                    </div>
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