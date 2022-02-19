import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pDetails as PDetails } from '../../_components/project/Grid/p_details'
import { TableArea } from '../../_components/project/Grid/p_table'
import { useSelector, connect } from 'react-redux'
import { history } from '../../_helpers'

import { Info } from '../../_components/project/Info'

export function SingleProject(props) {
    const userData = useSelector((state) => state.userData.current)
    let id = useParams().id
    const [songs, setSongs] = useState(userData)
    const [userId, setUserId] = useState(id)

    if (!songs.songs.length > 0) {
        history.push(`/project/${userData.projectSlug}/new-song/`)
    } else {
        return (
            <div css={'width:100%'}>
                <div
                    css={'display:flex; flex-wrap: wrap; width: 100%;'}
                    className=" grid-area"
                >
                    <PDetails data={songs} />
                </div>
                <div>
                    <TableArea data={songs} />
                </div>
                <Info />
            </div>
        )
    }
}

const connectedProject = connect()(SingleProject)
export { connectedProject as Project }
