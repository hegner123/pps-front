import React from 'react';
import { connect } from 'react-redux';
import {TableCell} from '../tableCell';


class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:{},
            headers: this.props.headers,
            headersL: this.props.headers.length

        }
        this.handleStatusChange = this.handleStatusChange.bind(this);
        
    }
    setData = () => this.setState({
        data:this.props.data
      })

    handleStatusChange(status){
        if (status == "Complete"){
            statusSwap(0,"bass1","Incomplete")
        } else if (status == "Incomplete"){
            statusSwap(0,"bass1","Incomplete")
        }
    }

    statusSwap(song,instrument,change){
        this.setState({
            data:song.song_status[instrument].change
          });
    }

    render() {
        console.log(this.state.data)
        let display;
        const songs = this.props.data;
        function SongRow(title, songStatus) {
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
            display =

            result.map(projectSongs => (
                <tr key={projectSongs.title}>
                <TableCell data={projectSongs.title} key={projectSongs.title}/>
                {mapStatus(projectSongs, this.state.headers,this.state.headersL, this.handleStatusChange, projectSongs.title)}
                </tr>
                ))

        }

        function mapStatus(obj,headers,ref,statusChange,songData){
            let i =0;
            let j, k;
            let statusArray=[]
            for (j=0;j<ref;j++){
                let access = headers[j]
                if (obj.songStatus[access] == 'Complete' || obj.songStatus[access] == 'Incomplete' ){
                    statusArray.push(obj.songStatus[access])
                } else {
                    statusArray.push('N/A')
                }
            }


           return statusArray.map(data =>
                <TableCell data={data} key={i++} handleStatusChange={statusChange} id={songData}/>
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