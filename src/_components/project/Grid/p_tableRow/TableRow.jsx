import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TableCell } from '../p_tableCell'
import { TableRows } from './style'

import { ArrangementCell, SongRow, SongArrangement } from './constructors'

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

                currentSong.songStatus.forEach((songStatus) => {
                    song.songArrangement.forEach((arrangement) => {
                        if (songStatus.instrument === arrangement.instrument) {
                            arrangement.status = songStatus.status
                            arrangement.cellId = songStatus._id
                        }
                    })
                })

                let row = new SongRow(
                    currentSong.songTitle,
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
                        {console.log('projectSongs', projectSongs)}
                        <TableCell
                            songTitle={projectSongs.title}
                            key={projectSongs.songId}
                            id={Math.floor(Math.random() * 10000)}
                            songObject={projectSongs.songObject}
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
