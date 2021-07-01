import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import { TableCell } from '../p_tableCell';
import { TableRows } from './style';
import { projectActions } from '../../../_actions/project.actions';

 function TableRow(props){
    const [headers, setHeaders] = useState(props.headers);
    const [songs, setSongs] = useState(props.data);
    
    //establish main jsx variable
    let display;
    //Constructor for Song Rows
    class SongRow {
        constructor(title, arrangement, id) {
            this.songId = id;
            this.title = title;
            this.projectArrangement = arrangement
        }
    }
    //Constructor for Table Cells
    class ArrangementCell {
        constructor( instrument, status, id) {
            this.cellId = id
            this.instrument = instrument
            this.status = status;
        }
    }
    //Constructor for defining song arrangements
    class SongArrangement{
        constructor(){
            this.songArrangement =[]
        }
    }

    if (props.id == 'table-body'){
        // construct new objects based on headers, compares to project data from database,
        // then fills in the blanks, or use default settings

            let result = [];

            // for each song in song array build a new arrangement object
            // for every instrument in song make a new cell object
            //  for every instrument in song push that cell object into an arrangement object
            // for every song, take each song status object, compare the instrument to the arrangement cell,
            // and if they match transfer the status field to the arrangement cell
            for (let i of songs){
                let song = new SongArrangement;
                for (let j of headers){
                    let cell = new ArrangementCell(j, null, null)
                    song.songArrangement.push(cell)
                }
                i.song_status.forEach(song_status => {
                    song.songArrangement.forEach(arrangement =>{
                        if(song_status.instrument === arrangement.instrument){
                            arrangement.status = song_status.status
                            arrangement.cellId = song_status._id
                        }
                    })
                })
                let row = new SongRow(i.song_title, song, i._id)
                result.push(row)
            }

        display = result.map(projectSongs => (
                <TableRows key={projectSongs.title}>
                    <TableCell songTitle={projectSongs.title} key={projectSongs.title} songId={projectSongs.songId}/>
                    {mapStatus({
                        title: projectSongs.title,
                        projectHeaders: props.headers,
                        songs: projectSongs.projectArrangement.songArrangement,
                        songId: projectSongs.songId
                        })}
                </TableRows>
                ))
        }

        function mapStatus({title, songs, songId}){
            let i = 0;
           return songs.map(data =>
                        <TableCell
                        projectId={props.projectId}
                        songId ={songId}
                        cellId={data.cellId}
                        instrument={data.instrument}
                        data={data.status}
                        title ={title}
                        key={i++}
                        />
                )
        }
        return (
            <tbody>
                {display}
            </tbody>
        );
    }

    function mapState(state) {
        const { userData } = state;
        return { userData };
    }

    const actionCreators = {
        deleteSong: projectActions.deleteSong
    };




const connectedTableRow = connect(mapState, actionCreators)(TableRow);
export { connectedTableRow as TableRow };