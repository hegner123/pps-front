import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { store } from '../../../../_helpers'
import { TableCell } from '../p_tableCell'
import { TableRows } from './style'
import { projectActions } from '../../../../_actions/project.actions'

function TableRow(props) {
    const [headers, setHeaders] = useState('')
    const [songs, setSongs] = useState('')

    function handleChange() {
        console.log('test')
    }
    const unsubscribe = store.subscribe(handleChange)
    unsubscribe()
    let tableRows = []

    useEffect(() => {
        setHeaders(props.headers)
        setSongs(props.songs)
    }, [])

    //Constructor for Song Rows
    class SongRow {
        constructor(title, arrangement, id, index) {
            this.songId = id
            this.title = title
            this.projectArrangement = arrangement
            this.index = index
        }
    }
    //Constructor for Table Cells
    class ArrangementCell {
        constructor(instrument, status, id) {
            this.cellId = id
            this.instrument = instrument
            this.status = status
        }
    }
    //Constructor for defining song arrangements
    class SongArrangement {
        constructor() {
            this.songArrangement = []
        }
    }

    function mapStatus({ title, songs, songId }) {
        return songs.map((data, i) => (
            <TableCell
                projectId={props.projectId}
                songId={songId}
                cellId={data.cellId}
                instrument={data.instrument}
                data={data.status}
                title={title}
                key={i}
            />
        ))
    }
    if (props.id == 'table-body') {
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
    }

    return (
        <tbody>
            {tableRows.map((projectSongs, i) => (
                <TableRows
                    grid={
                        projectSongs.projectArrangement.songArrangement.length +
                        1
                    }
                    key={projectSongs.songId}
                >
                    <TableCell
                        songTitle={projectSongs.title}
                        key={projectSongs.songId}
                        id={Math.floor(Math.random() * 10000)}
                        songId={projectSongs.songId}
                        songIndex={i}
                    />
                    {mapStatus({
                        title: projectSongs.title,
                        projectHeaders: props.headers,
                        songs: projectSongs.projectArrangement.songArrangement,
                        songId: projectSongs.songId,
                    })}
                </TableRows>
            ))}
        </tbody>
    )
}

function mapState(state) {
    const { project } = state
    return { project }
}

const actionCreators = {
    deleteSong: projectActions.deleteSong,
}

const connectedTableRow = connect(mapState, actionCreators)(TableRow)
export { connectedTableRow as TableRow }
