import React, { useState } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { ProjectDetails, ProjectTitle, AddSong } from './style'
import Groupadd from '../../../../_assets/icons/groupadd.svg'
import { Invite } from '../../Invite'

export function pDetails(props) {
    const [showInvite, setShowInvite] = useState(false)
    let { path, url } = useRouteMatch()
    let id = useParams().id

    return (
        <ProjectDetails>
            <ProjectTitle>{props.data.projectTitle}</ProjectTitle>
            <Link to={`${url}/newsong`} css={``}>
                <AddSong>+</AddSong>
            </Link>

            <AddSong onClick={() => setShowInvite(!showInvite)}>
                <Groupadd />
                <Invite visible={showInvite} />
            </AddSong>
        </ProjectDetails>
    )
}
