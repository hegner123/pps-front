import React,{useState} from 'react';
import { connect } from 'react-redux';
import { TableCell } from '../p_tableCell';
import { useSelector } from 'react-redux';



 function TableRow(props){
const [headers, setHeaders] = useState(props.headers)
const [songs, setSongs] = useState(props.data)
    let display;
    class SongRow {
        constructor(title, arrangement, id) {
            this.songId = id;
            this.title = title;
            this.projectArrangement = arrangement
        }
    }
    class ArrangementCell {
        constructor( instrument, status, id) {
            this.cellId = id
            this.instrument = instrument
            this.status = status;
        }
    }
    class SongArrangement{
        constructor(){
            this.songArrangement =[]
        }
    }
    if (props.id == 'table-body'){
//song row needs to be [ songTitle , arrangement cells, ...]
// table row
// table cell - title
//table cell - arrangement cell

//construct new objects based on headers, compare to api data, fill in the blanks, or use default settings
            let result = [];

            for (let i of songs){
                // for each song in song array build a new arrangement object
                let song = new SongArrangement
                for (let j of headers){
                // for every instrument in song make a new cell object
                    let cell = new ArrangementCell(j, null, null)
                //  for every instrument in song push that cell object into an arrangement object
                    song.songArrangement.push(cell)
                }

// for every song, take each song status object, compare the instrument to the arrangement cell, and if they match transfer the status field to the arrangement cell
                i.song_status.forEach(song_status => {

                song.songArrangement.forEach(arrangement =>{
                    if(song_status.instrument === arrangement.instrument){
                        arrangement.status = song_status.status
                        arrangement.cellId = song_status._id
                    } else {

                    }
                })

                })

                let row = new SongRow(i.song_title, song, i._id)
                result.push(row)
            }
            display = result.map(projectSongs => (
                    <tr key={projectSongs.title}>
                    <TableCell data={projectSongs.title} key={projectSongs.title} projectId={props.projectId}/>
                    {mapStatus({
                        title: projectSongs.title,
                        projectHeaders: props.headers,
                        songs: projectSongs.projectArrangement.songArrangement,
                        songId: projectSongs.songId
                        })}
                    </tr>
                    ))
            }

        function mapStatus({title,songs ,songId}){
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




const connectedTableRow = connect()(TableRow);
export { connectedTableRow as TableRow };