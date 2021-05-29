import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../../_helpers';
import { projectActions } from '../../../_actions'
import { CompletedCell, IncompleteCell, NaCell, TextCell  } from './style'


function  TableCell (props) {


  


        const cellStatus =  props.data
        let click;
        let display;
        if ( props.instrument){
            let songName =  props.id.trim().toLowerCase().replace(/\s/g, "-");
            let instrument =  props.instrument;
            let cellStatus =  props.data
            if ( props.data == 'Complete'){
                 return display = <CompletedCell onClick={() => props.changeCellStatus(songName, instrument)} songName={songName} instrument={instrument}/>
            } else if ( props.data == 'Incomplete'){
                return display = <IncompleteCell onClick={() => props.changeCellStatus()}/>
            } else {
                return display = <NaCell/>
            }
        } else {
            display = <TextCell>{cellStatus}</TextCell>
        }
        return (
    display
        );
    }

    function mapState(state) {
        const { cellStatus } = state;
        return { cellStatus };
    }

    const actionCreators = {
        changeCellStatus: projectActions.changeCellStatus,
    };

const connectedTableCell = connect(mapState, actionCreators)(TableCell);
export { connectedTableCell as TableCell };


// props.handleStatusChange(songName, instrument, cellStatus) 