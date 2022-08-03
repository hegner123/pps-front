import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { ProjectDetails, ProjectTitle, AddSong } from './style'

export function pDetails(props) {
    let { path, url } = useRouteMatch()
    let id = useParams().id

    return (
        <ProjectDetails>
            <ProjectTitle>{props.data.projectTitle}</ProjectTitle>
            <Link to={`${url}/newsong`}>
                <AddSong>+</AddSong>
            </Link>
        </ProjectDetails>
    )
}
