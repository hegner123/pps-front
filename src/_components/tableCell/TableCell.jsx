import React from 'react';
import { connect } from 'react-redux';


class tableCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        
        let click;
        let clickable;
        let status;
        let fill;
        if (this.props.handleStatusChange){
            console.log(this.props)
            click = (e=>this.props.handleStatusChange(this.props.id, this.props.instrument, this.props.data));
            clickable = "clickable";
            if (this.props.data == "Complete"){
                status = "fill-green"
            } else {
                status = "fill-red"
            }
        } else {
            click;
            fill = this.props.data;
        }
        return (
    <td className ={clickable + " " + status} key={this.props.data} onClick={click}>
        {fill}
    </td>
        );
    }
}



const connectedTableCell = connect()(tableCell);
export { connectedTableCell as TableCell };