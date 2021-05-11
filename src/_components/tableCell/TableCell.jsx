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
            let songName = this.props.id;
            let instrument = this.props.instrument;
            let cellStatus = this.props.data
            // console.log('cell ' + songName + ' ' + instrument + ' ' + cellStatus)
            click = (e=>this.props.handleStatusChange(songName, instrument, cellStatus));
            clickable = "clickable";
            if (cellStatus == "Complete"){
                status = "fill-green"
            } else if (cellStatus == 'Incomplete'){
                status = "fill-red"
            } else (
                status = 'fill-inactive'
            )
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