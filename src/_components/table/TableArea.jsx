import React from 'react';
import { connect } from 'react-redux';
import {TableRow} from '../tableRow'


class tableArea extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            data:this.props,
            songs:this.props.data[1].songs,
            songTotal:this.props.data[1].songs.length
        }
    }
    render() {

        function tableHeaders(songs,length){
            let i, j, k;
            let instruments = [];
            for (i=0;i<length;i++){
            let arrangements = songs[i].song_arrangements;
               for (j=0;j<arrangements.length;j++){
                   for (k=0;k<arrangements.length; k++){
                       if (instruments[j]!==arrangements[k]){
                           instruments.push(arrangements[k]);
                       }
                   }
                //   user-defined sorting, or manipulating could be cool
                   return instruments.sort()
               }
            }
        };
        return (
        <table>
            <thead>
                <TableRow data={tableHeaders(this.state.songs, this.state.songTotal)}/>
            </thead>
            <tbody>
            </tbody>
        </table>
        );
    }
}



const connectedTableArea = connect()(tableArea);
export { connectedTableArea as TableArea };