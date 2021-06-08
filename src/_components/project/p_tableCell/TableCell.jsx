import React, {useState, useEffect} from 'react';
import {  connect } from 'react-redux';
import { projectActions } from '../../../_actions';
import { CompletedCell, IncompleteCell, NaCell, TextCell, TitleCell  } from './style';
import  Edit  from '../../../_assets/icons/more.svg';
import {store} from '../../../_helpers';


function  TableCell (props) {
    const [songId,setSongId] = useState(props.songId)
    const [songTitle,setSongTitle] = useState(props.songTitle)
    const [instrument,setInstrument] = useState(props.instrument)
    const [cellStatus,setCellStatus] = useState(props.data)
    const [cellId,setCellId] = useState(props.cellId)
    const [projectSlug, setProjectSlug] = useState(props.projectId)
    




   
        let display;
        if ( props.instrument){

            if ( cellStatus == 'Complete'){
                 return display = <CompletedCell onClick={() => {props.changeCellStatus(projectSlug, songId, instrument, cellStatus,cellId); setCellStatus('Incomplete') }} songName={songTitle} instrument={instrument}/>
            } else if ( cellStatus == 'Incomplete'){
                return display = <IncompleteCell onClick={() => {props.changeCellStatus(projectSlug, songId, instrument, cellStatus, cellId); setCellStatus('Complete')}} songName={songTitle} instrument={instrument}/>
            } else {
                return display = <NaCell/>
            }
        } else if (props.songTitle){
            display = <TitleCell>
                        {songTitle}
                        <Edit css="width: 15px;height: 15px;padding: 10px;"/>
                    </TitleCell>
        } else {
         display =   <TextCell>
                        {cellStatus}
                    </TextCell>
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