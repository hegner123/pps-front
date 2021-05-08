import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../tableCell';


class tableRow extends React.Component {
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



const connectedTableRow = connect()(tableRow);
export { connectedTableRow as TableRow };