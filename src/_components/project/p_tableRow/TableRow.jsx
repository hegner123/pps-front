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
                {mapStatus({
                    project: projectSongs,
                    projectHeaders: this.state.headers,
                    projectHeadersLength: this.state.headersLength,
                    songTitle: projectSongs.title
                    })}
                </tr>
                ))
        }

        function mapStatus({project, projectHeaders, projectHeadersLength, songTitle}){
            let i = 0;
            let k = 0;
            let j;
            let statusArray=[];
            for (j=0;j<projectHeadersLength;j++){
                let access = projectHeaders[j]
                if (project.songStatus[access] == 'Complete' || project.songStatus[access] == 'Incomplete' ){
                    statusArray.push(project.songStatus[access])
                } else {
                    statusArray.push('N/A')
                }
            }

           return statusArray.map(data =>
                        <TableCell data={data}
                        key={i++}
                        id={songTitle}
                        instrument={projectHeaders[k++]}/>
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