import React, {} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


type IProps = {
    key : number,
    id : number,
    nickname : string,
    message : string,
    record : number,
}


function User(props : IProps) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.nickname}</TableCell>
            <TableCell>{props.message}</TableCell>
            <TableCell>{props.record}</TableCell>
        </TableRow>
    )
}

export default User;