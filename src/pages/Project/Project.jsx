import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { pDetails as PDetails } from '../../_components/project/Grid/p_details'
import { TableArea } from '../../_components/project/Grid/p_table'
import { connect } from 'react-redux'
import { history } from '../../_helpers'
import { projectActions, userActions } from '../../_actions'

import { Info } from '../../_components/project/Info'

function SingleProject(props) {
    const [isWaiting, setWaiting] = useState('unloaded')
    const [songs, setSongs] = useState()
    const location = useParams()

    useEffect(() => {
        setWaiting('start load')
        setSongs('')

        fetchData(
            props.authentication.user.id,
            props.authentication.user.userName
        )

        setWaiting('assign')
    }, [props.project.needsUpdate])

    useEffect(() => {
        switch (isWaiting) {
            case 'assign':
                assignCurrent(location.id)
                setWaiting('ready')
                break
            case 'ready':
                setSongs(props.project.current)
                setWaiting('loaded')
                break
            default:
                break
        }
    }, [isWaiting])

    function fetchData(id, userName) {
        props.getProjects(id, userName)
    }

    function assignCurrent(id) {
        props.assignProject(id)
    }

    if (songs && !songs.songs.length > 0) {
        history.push(`/project/${project.projectSlug}/new-song/`)
        return (
            <>
                <p>loading</p>
            </>
        )
    } else {
        let id = useParams().id

        return (
            <div css={'width:100%'}>
                <div
                    css={'display:flex; flex-wrap: wrap; width: 100%;'}
                    className=" grid-area"
                >
                    {songs && <PDetails data={songs} />}
                </div>
                <div>{songs && <TableArea data={songs} />}</div>
                <div>{/* <Info /> */}</div>
            </div>
        )
    }
}

function mapState(state) {
    const { project, authentication } = state
    return { project, authentication }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
    getUser: userActions.getById,
    assignProject: projectActions.assignProject,
}

const connectedProject = connect(mapState, actionCreators)(SingleProject)
export { connectedProject as Project }
