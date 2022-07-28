import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ProjectsTile, TileHeader } from './style'
import { Link, useParams } from 'react-router-dom'
import { projectActions } from '../../../_actions'

function DashTile(props) {
    const param = useParams()
    console.log(['slug', props.slug])
    return (
        <div css={'margin-bottom:10px;'}>
            <Link
                to={'/project/' + props.slug}
                onClick={() => props.assignProject(props.slug)}
            >
                <ProjectsTile>
                    <TileHeader>{props.data}</TileHeader>
                </ProjectsTile>
            </Link>
        </div>
    )
}

function RecentDashTile(props) {
    const [projects, setProjects] = useState([null])
    const [isWaiting, setWaiting] = useState(true)
    const param = useParams()

    useEffect(() => {
        if (props.project.projects !== 'unset') {
            filterProj()
        }
    }, [props.project.projects])

    function filterProj() {
        console.log('filter')
        const res = props.project.projects.filter(filterProjects)
        setProjects(res[0])
        setWaiting(false)
    }
    function filterProjects(project) {
        return project._id === props.id
    }

    return (
        <div css={'margin-bottom:10px;'}>
            {!isWaiting && (
                <Link
                    to={'/project/' + projects.projectSlug}
                    onClick={() =>
                        props.assignProject(
                            'assign',
                            projects.projectSlug,
                            param
                        )
                    }
                >
                    <ProjectsTile>
                        <TileHeader>{projects.projectTitle}</TileHeader>
                    </ProjectsTile>
                </Link>
            )}
        </div>
    )
}

function mapState(state) {
    const { project, recent } = state
    return { project, recent }
}

const actionCreators = {
    assignProject: projectActions.assignProject,
}

const connectedDashTile = connect(mapState, actionCreators)(DashTile)
export { connectedDashTile as DashTile }

const connectedRecentDashTile = connect(
    mapState,
    actionCreators
)(RecentDashTile)
export { connectedRecentDashTile as RecentDashTile }
