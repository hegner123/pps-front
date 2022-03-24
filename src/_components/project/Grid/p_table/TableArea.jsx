import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TableHeaders } from '../p_tableHeaders'
import { TableRow } from '../p_tableRow'
import { Table, TableHead } from './style'
import { projectActions } from '../../../../_actions/project.actions'

function TableArea(props) {
    const [songs, setSongs] = useState(false)
    const [projectId, setProjectId] = useState(false)

    useEffect(() => {
        setSongs(props.userData.current.songs)
        setProjectId(props.data._id)
    }, [props.userData.current.songs])

    function tableHeaders(songs) {
        let instruments = []
        songs.forEach((song) => {
            song.song_arrangements.forEach((instrument) => {
                if (!instruments.includes(instrument)) {
                    instruments.push(instrument)
                }
            })
        })
        //   user-defined sorting, or manipulating could be cool
        return instruments
    }
    return (
        <Table>
            {songs && (
                <TableHead>
                    <TableHeaders data={tableHeaders(songs)} id={'headers'} />
                </TableHead>
            )}

            {songs && (
                <TableRow
                    songs={songs}
                    projectId={projectId}
                    headers={tableHeaders(songs)}
                    id={'table-body'}
                />
            )}
        </Table>
    )
}

function mapState(state) {
    const { userData } = state
    return { userData }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
}

const connectedTableArea = connect(mapState, actionCreators)(TableArea)
export { connectedTableArea as TableArea }
