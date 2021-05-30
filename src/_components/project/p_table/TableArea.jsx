import React from 'react';
import { connect } from 'react-redux';
import { TableHeaders } from '../p_tableHeaders';
import { TableRow } from '../p_tableRow';
import loadingGif from '../../../_assets/images/loading-buffering.gif';
import { Table } from './style';
import {projectActions} from '../../../_actions/project.actions'


class TableArea extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            songs: this.props.data.songs,
            projectId: this.props.data._id
        }
    }
    componentDidMount() {
            this.props.getProjects()
    }
    render() {
        let display;
        if (this.props.data.songs){
            display = <img src={loadingGif} alt="" />
                }

        function tableHeaders(songs){
            let instruments = [];
            songs.forEach(song => {
                song.song_arrangements.forEach(instrument => {
                    if(!instruments.includes(instrument)){
                        instruments.push(instrument)
                    }
                })
            });
            //   user-defined sorting, or manipulating could be cool
            return instruments.sort()
        };
        return (
            <Table>
                <thead>
                    {this.state.songs &&
                    <TableHeaders data={tableHeaders(this.state.songs)} id={'headers'}/>
                    }
                </thead>
                {this.state.songs &&
                <TableRow
                data={this.state.songs}
                projectId={this.state.projectId}
                headers={tableHeaders(this.state.songs)}
                id={'table-body'}
                />
                }
            </Table>
        );
    }
}

function mapState(state) {
    const { projects } = state.userData;
    return { projects };
}

const actionCreators = {
    getProjects: projectActions.getProjects
};

const connectedTableArea = connect(mapState, actionCreators)(TableArea);
export { connectedTableArea as TableArea };