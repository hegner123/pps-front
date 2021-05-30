import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../p_tableCell';


export function tableHeaders(props){
let display;

        if (props.id !== 'table-body'){
            props.data.unshift("song");
            display =props.data.map(dat => (
                <TableCell data={dat} key={dat}/>
                ))

        }
        return (
        <tr>
            {display}
        </tr>
        );
    }




const connectedTableHeaders = connect()(tableHeaders);
export { connectedTableHeaders as TableHeaders };