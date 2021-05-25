import React from 'react';
import { connect } from 'react-redux';
import { CompletedCell, IncompleteCell, NaCell, TextCell  } from './style'


class tableCell extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cellStatus = this.props.data
        let click;
        let display;
        if (this.props.handleStatusChange){
            let songName = this.props.id;
            let instrument = this.props.instrument;
            let cellStatus = this.props.data
            click = (e=>this.props.handleStatusChange(songName, instrument, cellStatus));
            if (this.props.data == 'Complete'){
                 return display = <CompletedCell onClick={click}/>
            } else if (this.props.data == 'Incomplete'){
                return display = <IncompleteCell onClick={click}/>
            } else {
                return display = <NaCell/>
            }
        } else {
           return display = <TextCell>{cellStatus}</TextCell>
        }
        return (
    {display}
        );
    }
}



const connectedTableCell = connect()(tableCell);
export { connectedTableCell as TableCell };