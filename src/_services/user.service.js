import config from 'config'
import { history } from '../_helpers'
import { authHeader } from '../_helpers'

export const userService = {
    login,
    logout,
    resetPassword,
    register,
    update,
    addToRecent,
    getById,
    findUsers,
    saveSettings,
    sendInvitation,
    handleInvitation,
    checkInvites,
    sendExternalInvitation,
    delete: _delete,
}

function login(userName, hash) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, hash }),
    }

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(1),
    }

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
}
function findUsers(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(1),
    }
    console.log(`${config.apiUrl}/users/search/${email}`)
    return fetch(`${config.apiUrl}/users/search/${email}`, requestOptions).then(
        handleResponse
    )
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userProjects')
    localStorage.removeItem('user')
    localStorage.removeItem('recent')
    history.push('/')
}

function resetPassword(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }
    return fetch(`${config.apiUrl}/users/resetPassword`, requestOptions).then(
        handleResponse
    )
}
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }
    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
        handleResponse
    )
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }

    return fetch(`${config.apiUrl}/${user.id}`, requestOptions).then(
        handleResponse
    )
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    }

    return fetch(`${config.apiUrl}/${id}`, requestOptions).then(handleResponse)
}

function addToRecent(project, user) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(1),
        body: JSON.stringify(project),
    }
    return fetch(`${config.apiUrl}/users/recent/${user}`, requestOptions).then(
        handleResponse
    )
}

function saveSettings(userId, settings) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(1), 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
    }

    return fetch(
        `${config.apiUrl}/users/${userId}/settings`,
        requestOptions
    ).then(handleResponse)
}

function sendInvitation(userId, invite) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invite),
    }
    return fetch(
        `${config.apiUrl}/users/invitation.send/${userId}`,
        requestOptions
    ).then(handleResponse)
}
function sendExternalInvitation(userEmail, invite) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invite),
    }
    return fetch(
        `${config.apiUrl}/users/invitation.sendExternal/${userEmail}`,
        requestOptions
    ).then(handleResponse)
}
function handleInvitation(userId, status) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(status),
    }
    return fetch(
        `${config.apiUrl}/users/invitation.handle/${userId}`,
        requestOptions
    ).then(handleResponse)
}
function checkInvites(userId, projectId) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectId),
    }
    return fetch(
        `${config.apiUrl}/users/invitation.check/${userId}`,
        requestOptions
    ).then(handleResponse)
}
function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout()
                location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}
