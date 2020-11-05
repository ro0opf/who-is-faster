import React, { useState, useEffect } from 'react'
import { Wrapper } from './MainBody.css'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core'
import User from '../components/User'
import axios from 'axios'

type IProps = {
    height: string,
    btnGameStartOnClick: React.MouseEventHandler<HTMLButtonElement>
}


export interface ITop10Users {
    key: number,
    id: number,
    nickname: string,
    message: string,
    record: number,
}

function MainBody({ height, btnGameStartOnClick }: IProps) {
    const [top10Users, setTop10Users] = useState<ITop10Users[]>([])

    useEffect(() => {
        async function FetchTop10Users() {
            const result = await axios(
                'https://116.123.85.116:9999/click/query?rank=5'
            )

            console.log(result.data);

            setTop10Users(result.data)
        }
        FetchTop10Users()

        return function CleanUp() {

        }
    }, [])

    return (
        <Wrapper height={height}>
            <div className="user-rank">
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Rank</TableCell>
                                <TableCell>Nickname</TableCell>
                                <TableCell>Message</TableCell>
                                <TableCell>Record(s)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {top10Users.map((user: ITop10Users, index: number) => {
                                return (
                                    <User
                                        key={user.id}
                                        id={index + 1}
                                        nickname={user.nickname}
                                        message={user.message}
                                        record={user.record / 1000} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            <div className="btn-game-start">
                <Button variant="contained" style={{ width : "85%", height : "40%", fontSize : "30px",  backgroundColor: "green" }} onClick={btnGameStartOnClick}>
                    Game Start
                </Button>
            </div>
        </Wrapper>
    )
}

export default MainBody;