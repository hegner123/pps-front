import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { userActions } from '../../../_actions'
import { Modal } from './style'

function Invite(props) {
    const [hasEmail, setEmail] = useState()

    let id = useParams().id

    function handleSendInvite() {
        const args = {
            projectSlug: '',
            projectId: '',
            userName: '',
            id: '',
        }
    }
    return <>{props.visible ? <Modal>Test</Modal> : <></>}</>
}

function mapState(state) {
    const { authentication, monitor, userProjects } = state
    return { authentication, monitor, userProjects }
}

const actionCreators = {
    sendInvite: userActions.sendInvite,
    handleInvitation: userActions.handleInvitation,
    checkInvites: userActions.checkInvites,
}

const connectedInvite = connect(mapState, actionCreators)(Invite)
export { connectedInvite as Invite }
