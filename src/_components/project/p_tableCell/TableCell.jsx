import React from 'react';
import { connect } from 'react-redux';
import { projectActions } from '../../../_actions'
import { CompletedCell, IncompleteCell, NaCell, TextCell  } from './style'


function  TableCell (props) {
    let projectSlug  = props.projectId;
        const cellStatus =  props.data
        let display;
        if ( props.instrument){
            let songId = props.songId
            let songName =  props.title;
            let instrument =  props.instrument;
            let cellStatus =  props.data;
            let cellId = props.cellId
            if ( props.data == 'Complete'){
                 return display = <CompletedCell onClick={() => props.changeCellStatus(projectSlug, songId, instrument, cellStatus,cellId)} songName={songName} instrument={instrument}/>
            } else if ( props.data == 'Incomplete'){
                return display = <IncompleteCell onClick={() => props.changeCellStatus(projectSlug, songId, instrument, cellStatus, cellId)} songName={songName} instrument={instrument}/>
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