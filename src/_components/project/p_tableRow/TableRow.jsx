import React from 'react';
import { connect } from 'react-redux';
import { TableCell } from '../p_tableCell';



class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data:this.props.data,
            headers: this.props.headers,
            headersLength: this.props.headers.length
        }
    }
    render() {
        let display;
        const songs = this.props.data;
        class SongRow {
            constructor(title, songStatus) {
                this.title = title;
                this.songStatus = songStatus;
            }
        }
        if (this.props.id == 'table-body'){
            let i;
            let result = [];
            for (i =0; i< this.state.headers;i++){
                let row = new SongRow(songs.song_title[i], songs.song_status[i])
                result.push(row)
            }
            console.log(result)
            result.sort()
            display = result.map(projectSongs => (
                <tr key={projectSongs.title}>
                <TableCell data={projectSongs.title} key={projectSongs.title}/>
                {mapStatus({
                    projectHeaders: this.state.headers,
                    songs:projectSongs,
                    })}
                </tr>
                ))
        }

        function mapStatus({songs }){
            let title = songs.title
            let i = 0;
           return songs.songStatus.map(data =>
                        <TableCell
                        instrument={data.instrument}
                        data={data.status}
                        id={title}
                        key={i++}/>
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