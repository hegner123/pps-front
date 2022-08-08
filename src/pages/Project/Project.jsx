import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom'

import { pDetails as PDetails } from '../../_components/project/Grid/p_details'
import { TableArea } from '../../_components/project/Grid/p_table'
import { connect } from 'react-redux'
import { history } from '../../_helpers'
import { projectActions, userActions } from '../../_actions'
import { projectService } from '../../_services/'
import { NewSong } from '../../_forms/NewSong/NewSong'
import { Invite } from '../../_components/project/Invite'
import { Info } from '../../_components/project/Info'

function SingleProject(props) {
    let { path, url } = useRouteMatch()
    const [hasProject, setProject] = useState()
    const location = useParams()

    useEffect(() => {
        projectService
            .getProjects(props.authentication.user._id)
            .then((data) => {
                let projects = data.filter((project) => {
                    return project.projectSlug == location.id
                })

                setProject(projects)
                props.setSelected(projects[0].songs[0])
            })
        props.assignProject(location.id)
    }, [props.monitor.idle])

    return (
        <div css={'width:100%'}>
            <Switch>
                <Route exact path={path}>
                    <div
                        css={'display:flex; flex-wrap: wrap; width: 100%;'}
                        className=" grid-area"
                    >
                        {hasProject && <PDetails data={hasProject[0]} />}
                    </div>
                    <div>
                        {hasProject && <TableArea data={hasProject[0]} />}
                    </div>
                    <div>{hasProject && <Info data={hasProject[0]} />}</div>
                </Route>
                <Route exact path={`${path}/newsong`}>
                    <div>{hasProject && <NewSong data={hasProject[0]} />}</div>
                </Route>
                
            </Switch>
        </div>
    )
}

function mapState(state) {
    const { authentication, monitor, userProjects } = state
    return { authentication, monitor, userProjects }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
    assignProject: projectActions.assignProject,
    setSelected: projectActions.setSelected,
}

const connectedProject = connect(mapState, actionCreators)(SingleProject)
export { connectedProject as Project }
