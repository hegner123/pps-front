import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../../_helpers';
import { CompletedCell, IncompleteCell, NaCell, TextCell  } from './style'


function  TableCell (props) {
    if(props.id){
        let id = props.id.trim().toLowerCase().replace(/\s/g, "-")
        const projectStore = store.getState()
        const projectData = projectStore.userData.projects;
        function iterate(data){
            let display;
            data.forEach(data => {
                let compare = data.projectTitle.trim().toLowerCase().replace(/\s/g, "-")
                console.log(id == compare)
                if(id == compare){
                    display = data
                }
            })
            return display;
        }
        console.log(iterate(projectData))
    }
    

    
        let cellStatus =  props.data
        let click;
        let display;
        if ( props.handleStatusChange){
            let songName =  props.id;
            let instrument =  props.instrument;
            let cellStatus =  props.data
            function click(e){
                e.preventDefault()

        };
            if ( props.data == 'Complete'){
                 return display = <CompletedCell onClick={(e) => click(e)}/>
            } else if ( props.data == 'Incomplete'){
                return display = <IncompleteCell onClick={(e) => click(e)}/>
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



const connectedTableCell = connect()(TableCell);
export { connectedTableCell as TableCell };


// props.handleStatusChange(songName, instrument, cellStatus) 