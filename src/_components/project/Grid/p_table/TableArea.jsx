import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TableHeaders } from '../p_tableHeaders'
import { TableRow } from '../p_tableRow'
import { Table, TableHead } from './style'

function TableArea(props) {
    const [songs, setSongs] = useState()
    const [projectId, setProjectId] = useState()
    const [hasTableHeaders, setTableHeaders] = useState()

    useEffect(() => {
        setSongs(props.data.songs)
        setProjectId(props.data._id)
        setTableHeaders(tableHeaders(props.data.songs))
    }, [props.data])

    function tableHeaders(headers) {
        let instruments = []

        headers.forEach((song) => {
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
            <TableHead>
                {hasTableHeaders && (
                    <TableHeaders data={hasTableHeaders} id={'headers'} />
                )}
            </TableHead>
            {hasTableHeaders && (
                <TableRow
                    songs={songs}
                    projectId={projectId}
                    headers={hasTableHeaders}
                    id={'table-body'}
                />
            )}
        </Table>
    )
}

const connectedTableArea = connect()(TableArea)
export { connectedTableArea as TableArea }
