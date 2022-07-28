import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../../_actions'
import { projectActions } from '../../../_actions'
import { RecentProjects, UserProjects } from '../d_projects/'

function Dash(props) {
    const [projects, setProjects] = useState(false)

    function fetchData(id, userName) {
        props.getProjects(id, userName)
        setProjects(JSON.parse(localStorage.getItem('userProjects')))
    }
    useEffect(() => {
        fetchData(
            props.authentication.user.id,
            props.authentication.user.userName
        )
    }, [])

    return (
        <div>
            {projects && (
                <>
                    <RecentProjects />
                    {console.log(projects)}
                    <UserProjects projects={projects} />
                </>
            )}
        </div>
    )
}

function mapState(state) {
    const { authentication, recent } = state
    return { authentication, recent }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
    getUser: userActions.getById,
}

const connectedDash = connect(mapState, actionCreators)(Dash)
export { connectedDash as Dash }
