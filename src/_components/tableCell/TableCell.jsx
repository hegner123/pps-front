import React from 'react';
import { connect } from 'react-redux';


class tableCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
    <td key={this.props.data}>
        <p>{this.props.data}</p>
    </td>
        );
    }
}



const connectedTableCell = connect()(tableCell);
export { connectedTableCell as TableCell };