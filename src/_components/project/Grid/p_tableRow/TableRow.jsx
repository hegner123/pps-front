import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { store } from '../../../../_helpers'
import { TableCell } from '../p_tableCell'
import { TableRows } from './style'
import { projectActions } from '../../../../_actions/project.actions'
import { ArrangementCell, SongRow, SongArrangement } from './constructors'
import { render } from 'react-dom'

function TableRow(props) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(renderTable(props.headers, props.songs, props.id))
    }, [props])
    function renderTable(headers, songs, id) {
        let tableRows = []
        if (id == 'table-body') {
            for (let currentSong of songs) {
                let song = new SongArrangement()

                for (let currentHead of headers) {
                    let cell = new ArrangementCell(currentHead, null, null)
                    song.songArrangement.push(cell)
                }

                currentSong.song_status.forEach((song_status) => {
                    song.songArrangement.forEach((arrangement) => {
                        if (song_status.instrument === arrangement.instrument) {
                            arrangement.status = song_status.status
                            arrangement.cellId = song_status._id
                        }
                    })
                })

                let row = new SongRow(
                    currentSong.song_title,
                    song,
                    currentSong._id,
                    currentSong
                )

                tableRows.push(row)
            }
            return tableRows
        }
    }

    function mapStatus({ title, songs, songId }) {
        return songs.map((data, i) => {
            if (i > 0) {
                return (
                    <TableCell
                        projectId={props.projectId}
                        songId={songId}
                        cellId={data.cellId}
                        instrument={data.instrument}
                        data={data.status}
                        title={title}
                        key={i}
                    />
                )
            }
        })
    }

    return (
        <tbody>
            {rows &&
                rows.map((projectSongs, i) => (
                    <TableRows
                        grid={
                            projectSongs.projectArrangement.songArrangement
                                .length
                        }
                        key={projectSongs.songId}
                    >
                        <TableCell
                            songTitle={projectSongs.title}
                            key={projectSongs.songId}
                            id={Math.floor(Math.random() * 10000)}
                            songId={projectSongs.songId}
                            songIndex={i}
                            projectId={props.projectId}
                        />
                        {mapStatus({
                            title: projectSongs.title,
                            projectHeaders: props.headers,
                            songs: projectSongs.projectArrangement
                                .songArrangement,
                            songId: projectSongs.songId,
                            projectId: props.projectId,
                        })}
                    </TableRows>
                ))}
        </tbody>
    )
}

const connectedTableRow = connect()(TableRow)
export { connectedTableRow as TableRow }
