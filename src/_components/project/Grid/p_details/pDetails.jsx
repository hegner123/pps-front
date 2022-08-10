import React, { useState } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { ProjectDetails, ProjectTitle, AddSong } from './style'
import Groupadd from '../../../../_assets/icons/groupadd.svg'
import Add from '../../../../_assets/icons/add.svg'
import { uiActions } from '../../../../_actions'

function pDetails(props) {
    let { path, url } = useRouteMatch()
    let id = useParams().id

    return (
        <ProjectDetails>
            <ProjectTitle>{props.data.projectTitle}</ProjectTitle>
            <Link to={`${url}/newsong`} css={``}>
                <AddSong>
                    <Add fill="#fff" />
                </AddSong>
            </Link>

            <AddSong
                onClick={() =>
                    props.setInviteOpen(!props.userInterface.inviteOpen)
                }
            >
                <Groupadd />
            </AddSong>
        </ProjectDetails>
    )
}

function mapState(state) {
    const { userInterface } = state
    return { userInterface }
}

const actionCreators = {
    setInviteOpen: uiActions.setInviteOpen,
}

const connectedpDetails = connect(mapState, actionCreators)(pDetails)
export { connectedpDetails as pDetails }
