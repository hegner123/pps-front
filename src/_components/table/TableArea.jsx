import React from 'react';
import { connect } from 'react-redux';
import {TableHeaders} from '../tableHeaders';
import {TableRow} from '../tableRow'


class tableArea extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            data:this.props,
            songs:this.props.data[4].songs,
            songTotal:this.props.data[4].songs.length
        }
    }
    render() {
        function tableHeaders(songs,length){
            let i, j, k;
            let instruments = [];
            let arrangements = songs.forEach(song => {
                song.song_arrangements.forEach(instrument => {
                    if(instruments.includes(instrument)){
                        ;
                    } else {
                        instruments.push(instrument)
                    }
                })
            });

            //   user-defined sorting, or manipulating could be cool
            return instruments.sort()
        };
        return (
        <table>
            <thead>
                <TableHeaders data={tableHeaders(this.state.songs, this.state.songTotal)} id={'headers'}/>
            </thead>
                <TableRow
                data={this.state.songs}
                headers={tableHeaders(this.state.songs, this.state.songTotal)}
                id={'table-body'}
                />
        </table>
        );
    }
}



const connectedTableArea = connect()(tableArea);
export { connectedTableArea as TableArea };