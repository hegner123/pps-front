import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../../_actions'
import { projectActions } from '../../../_actions'
import { RecentProjects, UserProjects } from '../d_projects/'

function Dash(props) {
    const [isWaiting, setWaiting] = useState(true)
    const [projects, setProjects] = useState([])
    const recent = props.authentication.user.recentProjects

    function fetchData(id, userName) {
        props.getProjects(id, userName)
    }
    useEffect(() => {
        fetchData(
            props.authentication.user.id,
            props.authentication.user.userName
        )
    }, [props.project.needsUpdate])
    function handleStatusChange() {
        setWaiting(false)
        setProjects(props.project.projects)
    }

    useEffect(() => {
        handleStatusChange()
    }, [])

    if (isWaiting) {
        return (
            <div>
                <p css={'color:var(--white);'}>Waiting</p>
            </div>
        )
    } else {
        return (
            <div>
                <RecentProjects />
                <UserProjects projects={projects} />
            </div>
        )
    }
}

function mapState(state) {
    const { project, authentication, recent } = state
    return { project, authentication, recent }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
    getUser: userActions.getById,
}

const connectedDash = connect(mapState, actionCreators)(Dash)
export { connectedDash as Dash }
