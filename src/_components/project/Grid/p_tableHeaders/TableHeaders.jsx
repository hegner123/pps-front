import React from 'react'
import { connect } from 'react-redux'
import { TableCell } from '../p_tableCell'
import { TableRow } from './style'

export function tableHeaders(props) {
    let display

    if (props.id !== 'table-body') {
        props.data.unshift('song')
        display = props.data.map((dat, i) => <TableCell data={dat} key={i} />)
    }
    return <TableRow grid={props.data.length}>{display}</TableRow>
}

const connectedTableHeaders = connect()(tableHeaders)
export { connectedTableHeaders as TableHeaders }
