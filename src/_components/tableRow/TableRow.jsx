import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../tableCell';


class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:this.props.data,
            headers: this.props.headers,
            headersL: this.props.headers.length
        }
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }





    handleStatusChange(song, instrument, status){
        this.statusSwap(song, instrument,this.state.data, status)
    }

    statusSwap(song,instrument,data){
        
    let sourceData = data[song].song_status[instrument]
    if (sourceData == 'Complete'){
        console.log('flip')
    }

            }

    render() {
        console.log(this.state)
        let display;
        const songs = this.props.data;
        function SongRow(title, songStatus, instrument) {
            this.title = title;
            this.instrument = instrument;
            this.songStatus = songStatus;
            
          }
        if (this.props.id == 'table-body'){
            let i;
            let result = [];
            for (i=0;i<songs.length;i++){
                let row = new SongRow(songs[i].song_title, songs[i].song_status, songs[i].song_arrangements)
                result.push(row)
            }
            display = result.map(projectSongs => (
                <tr key={projectSongs.title}>
                <TableCell data={projectSongs.title} key={projectSongs.title}/>
                {mapStatus(projectSongs, this.state.headers,this.state.headersL, this.handleStatusChange, projectSongs.title)}
                </tr>
                ))
        }

        function mapStatus(obj,headers,ref,statusChange,songData){
            let i = 0;
            let k = 0;
            let j;
            let statusArray=[];
            for (j=0;j<ref;j++){
                let access = headers[j]
                if (obj.songStatus[access] == 'Complete' || obj.songStatus[access] == 'Incomplete' ){
                    statusArray.push(obj.songStatus[access])

                } else {
                    statusArray.push('N/A')
                }
            }

           return statusArray.map(data =>
                <TableCell data={data} key={i++} handleStatusChange={statusChange} id={songData} instrument={headers[k++]}/>
                )
        }

        return (
        <tbody>
            {display}
        </tbody>
        );
    }
}



const connectedTableRow = connect()(TableRow);
export { connectedTableRow as TableRow };