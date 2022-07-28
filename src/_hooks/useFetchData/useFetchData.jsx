import React, { useEffect, useState } from 'react'
import { store } from '../../_helpers'
import { connect } from 'react-redux'

import { projectActions } from '../../../_actions'

const state = store.getState()

export function useFetchData() {
    const [isWaiting, setWaiting] = useState(true)
    const [projects, setProjects] = useState([])
    const recent = state.authentication.user.recentProjects

    function fetchData(id, userName) {
        projectActions.getProjects(id, userName)
    }

    function handleStatusChange() {
        setWaiting(false)
    }

    useEffect(() => {
        fetchData(
            state.authentication.user.id,
            state.authentication.user.userName
        )
        handleStatusChange()
    }, [])

    useEffect(() => {
        setProjects(props.project.projects)
    }, [isWaiting])
}
