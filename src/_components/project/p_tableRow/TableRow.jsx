import React from 'react';
import { connect } from 'react-redux';
import { TableCell } from '../p_tableCell';


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

        this.statusSwap(song, instrument, status, this.state.data )
    }

    statusSwap(song,instrument,status, data){
    data.forEach(element => {
        if( element.song_title == song){
            if (element.song_status[instrument] == 'Complete'){
                let update = {[instrument]: 'incomplete'}
            }else if (element.song_status[instrument] == 'Incomplete'){
                console.log('fail')
            }
        }
    });

            }
    render() {
        let display;
        const songs = this.props.data;
        function SongRow(title, songStatus, ) {
            this.title = title;
            this.songStatus = songStatus;
          }
        if (this.props.id == 'table-body'){
            let i;
            let result = [];
            for (i=0;i<songs.length;i++){
                let row = new SongRow(songs[i].song_title, songs[i].song_status)
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