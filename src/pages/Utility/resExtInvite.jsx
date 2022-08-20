import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { projectActions } from '../../_actions'

const resExtInvite = () => {
    // useEffect(() => {
    //     console.log('test')
    // }, [])

    const params = useParams()
    return <></>
}

function mapState(state) {
    const { authentication } = state
    return { authentication }
}

const actionCreators = {
    assignProject: projectActions.assignProject,
}

const connectedResExtInvite = connect(mapState, actionCreators)(resExtInvite)
export { connectedResExtInvite as resExtInvite }
