import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../p_tableCell';


class tableHeaders extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
let display;

        if (this.props.id !== 'table-body'){
            this.props.data.unshift("song");
            display =this.props.data.map(dat => (
                <TableCell data={dat} key={dat}/>
                ))

        }
        return (
        <tr>
            {display}
        </tr>
        );
    }
}



const connectedTableHeaders = connect()(tableHeaders);
export { connectedTableHeaders as TableHeaders };