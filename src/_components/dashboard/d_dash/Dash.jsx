import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../../_actions'
import { projectActions } from '../../../_actions'
import { RecentProjects, UserProjects } from '../d_projects/'

function Dash(props) {
    const [isReady, setIsReady] = useState(false)

    function fetchData(id, userName) {
        props.getProjects(id, userName)
        setIsReady(true)
    }
    useEffect(() => {
        fetchData(
            props.authentication.user.id,
            props.authentication.user.userName
        )
    }, [])

    return (
        <div>
            {isReady && (
                <>
                    {/* <RecentProjects /> */}

                    <UserProjects
                        isReady={isReady}
                        hasProjects={props.userProjects.projects}
                    />
                </>
            )}
        </div>
    )
}

function mapState(state) {
    const { authentication, recent, userProjects } = state
    return { authentication, recent, userProjects }
}

const actionCreators = {
    getProjects: projectActions.getProjects,
    getUser: userActions.getById,
}

const connectedDash = connect(mapState, actionCreators)(Dash)
export { connectedDash as Dash }
