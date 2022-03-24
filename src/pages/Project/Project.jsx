import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pDetails as PDetails } from '../../_components/project/Grid/p_details'
import { TableArea } from '../../_components/project/Grid/p_table'
import { useSelector, connect } from 'react-redux'
import { history } from '../../_helpers'

import { Info } from '../../_components/project/Info'

export function SingleProject() {
    const userData = useSelector((state) => state.userData.current)
    const [songs, setSongs] = useState()

    useEffect(() => {
        setSongs(userData)
    }, [userData])

    if (songs && !songs.songs.length > 0) {
        history.push(`/project/${userData.projectSlug}/new-song/`)
        return (
            <>
                <p>loading</p>
            </>
        )
    } else {
        let id = useParams().id

        const [userId, setUserId] = useState(id)
        return (
            <div css={'width:100%'}>
                <div
                    css={'display:flex; flex-wrap: wrap; width: 100%;'}
                    className=" grid-area"
                >
                    {songs && <PDetails data={songs} />}
                </div>
                <div>{songs && <TableArea data={songs} />}</div>
                <div>
                    <Info />
                </div>
            </div>
        )
    }
}

const connectedProject = connect()(SingleProject)
export { connectedProject as Project }
