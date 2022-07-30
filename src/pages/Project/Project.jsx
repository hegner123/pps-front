import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { pDetails as PDetails } from '../../_components/project/Grid/p_details'
import { TableArea } from '../../_components/project/Grid/p_table'
import { connect } from 'react-redux'
import { history } from '../../_helpers'
import { projectActions, userActions } from '../../_actions'
import { projectService } from '../../_services/'

import { Info } from '../../_components/project/Info'

function SingleProject(props) {
    const [hasProject, setProject] = useState()
    const location = useParams()

    let currentStorage = JSON.parse(localStorage.getItem('current'))

    let localStorageData = JSON.parse(
        localStorage.getItem('userProjects')
    ).filter((project) => {
        return project.projectSlug == location.id
    })

    useEffect(() => {
        projectService.getProjects(props.authentication.user._id).then((data) =>
            setProject(
                data.filter((project) => {
                    return project.projectSlug == location.id
                })
            )
        )
    }, [props.monitor.idle])

    return (
        <div css={'width:100%'}>
            <div
                css={'display:flex; flex-wrap: wrap; width: 100%;'}
                className=" grid-area"
            >
                {hasProject && <PDetails data={hasProject[0]} />}
            </div>
            <div>{hasProject && <TableArea data={hasProject[0]} />}</div>
            <div>{/* <Info /> */}</div>
        </div>
    )
}

function mapState(state) {
    const { authentication, monitor } = state
    return { authentication, monitor }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
}

const connectedProject = connect(mapState, actionCreators)(SingleProject)
export { connectedProject as Project }
