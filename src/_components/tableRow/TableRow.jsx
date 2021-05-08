import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../tableCell';


class tableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
    <tr>
        {this.props.data.map(dat => (
            <TableCell data={dat} key={dat}/>
                        ))
                        }
    </tr>
        );
    }
}



const connectedTableRow = connect()(tableRow);
export { connectedTableRow as TableRow };