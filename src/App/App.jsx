import React, { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { alertActions, uiActions } from '../_actions'
import { connect } from 'react-redux'
import { history, indexDb } from '../_helpers'
import { PrivateRoute } from '../_components/privateRoute'
import { Menu } from '../_components/menu'
import { HomePage } from '../pages/HomePage'
import { SingleProject } from '../pages/Project'
import { LoginPage } from '../_forms/Login'
import { Register } from '../_forms/Register'
import { Dashboard } from '../pages/Dashboard'
import { NewSong } from '../_forms/NewSong'
import { NewProject } from '../_forms/NewProject'
import '../_assets/css/normalize.css'
import '../_assets/css/main.css'
import '../_assets/css/style.css'
import { AlertBar, Alert, TopLevel } from './style'
import { Account } from '../pages/Account'
import { TestPage } from '../pages/TestPage'

const App = (props) => {
    const { alert } = props

    useEffect(() => {
        props.setSettingsClose()
        const timer = setInterval(() => {
            // props.clearAlerts()
            clearInterval(timer)
        }, 1500)
    }, [])

    const dangerStyles = {
        Color: '#a94442',
        Back: '#f2dede',
        Border: '#ebccd1',
    }
    const successStyles = {
        Color: '#3c763d',
        Back: '#dff0d8',
        Border: '#d6e9c6',
    }

    function alertStyle(value) {
        if (value === 'AlertDanger') {
            return dangerStyles
        } else {
            return successStyles
        }
    }

    return (
        <TopLevel className="container">
            <Router history={history}>
                <Menu logout={() => logout(props)} />
                <Switch>
                    <PrivateRoute
                        exact
                        path="/project/:id"
                        component={SingleProject}
                    />
                    <PrivateRoute path="/account" component={Account} />
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <PrivateRoute
                        exact
                        path="/new-project"
                        component={NewProject}
                    />
                    <PrivateRoute
                        path="/project/:id/new-song/"
                        component={NewSong}
                    />

                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/login/demo" component={LoginPage} />
                    <Route path="/test" component={TestPage} />
                </Switch>
            </Router>
            <AlertBar>
                {alert.message && (
                    <Alert
                        type={alertStyle(alert.type)}
                        onClick={() => props.clearAlerts()}
                    >
                        {alert.message}
                    </Alert>
                )}
            </AlertBar>
        </TopLevel>
    )
}

function mapState(state) {
    const { alert } = state
    return { alert }
}

const actionCreators = {
    clearAlerts: alertActions.clear,
    setSettingsClose: uiActions.setSettingsClose,
}

const connectedApp = connect(mapState, actionCreators)(App)
export { connectedApp as App }
