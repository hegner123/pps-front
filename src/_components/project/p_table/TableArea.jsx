import React from 'react';
import { connect } from 'react-redux';
import { TableHeaders } from '../p_tableHeaders';
import { TableRow } from '../p_tableRow';
import loadingGif from '../../../_assets/images/loading-buffering.gif';


class tableArea extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            songs: this.props.data.songs,
        }
    }
    render() {
        let display;
        if (this.props.data.songs){
            display = <img src={loadingGif} alt="" />
                } else {
                    display = <h2></h2>
                }

        function tableHeaders(songs){
            let instruments = [];
            songs.forEach(song => {
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
                    {this.state.songs &&
                    <TableHeaders data={tableHeaders(this.state.songs)} id={'headers'}/>
                    }
                </thead>
                {this.state.songs &&
                <TableRow
                data={this.state.songs}
                headers={tableHeaders(this.state.songs)}
                id={'table-body'}
                />
                }
            </table>
        );
    }
}



const connectedTableArea = connect()(tableArea);
export { connectedTableArea as TableArea };