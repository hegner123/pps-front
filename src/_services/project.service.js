import config from 'config'
import { authHeader } from '../_helpers'
import { history } from '../_helpers/history'

export const projectService = {
    getProjects,
    createProjects,
    deleteProjects,
    createSong,
    deleteSong,
    changeCellStatus,
}

async function getProjects(user) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    }
    return fetch(`${config.apiUrl}/projects/${user}/`, requestOptions).then(
        (response) =>
            response.text().then((text) => {
                // console.log(JSON.parse(text))
                const responseData = text && JSON.parse(text)
                return responseData
            })
    )
}

async function createProjects(newProject) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(1),
        body: JSON.stringify({ newProject }),
    }
    return fetch(`${config.apiUrl}/projects/`, requestOptions)
        .then(handleResponse)
        .then(history.push('/dashboard'))
}

async function deleteProjects(project) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(1),
    }
    return fetch(`${config.apiUrl}/projects/${project}`, requestOptions)
        .then(handleResponse)
        .then(history.push('/dashboard'))
}

async function createSong(newSong) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(1),
        body: JSON.stringify({ newSong }),
    }

    return fetch(`${config.apiUrl}/projects/songs/`, requestOptions)
        .then(handleResponse)
        .then(history.push(newSong.path))
}

async function deleteSong(song, projectId) {
    const songData = {
        song: song,
        projectId: projectId,
    }
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(1),
        body: JSON.stringify(songData),
    }
    return fetch(`${config.apiUrl}/projects/songs/`, requestOptions).then(
        handleResponse
    )
}

async function changeCellStatus(project, song, instrument, status, id, user) {
    const options = { project, song, instrument, status, id }
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(1),
        body: JSON.stringify(options),
    }
    return fetch(`${config.apiUrl}/projects/update`, requestOptions).then(
        handleResponse
    )
}

function handleResponse(response) {
    return response.text().then((text) => {
        const responseData = text && JSON.parse(text)
        return responseData
    })
}
