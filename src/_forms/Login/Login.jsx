import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'
import {
    Button,
    Centered,
    FormSection,
    FormTitle,
    FormGroup,
    HelpBlock,
    Label,
    Row,
    Input,
    FormRegister,
} from './style'
import { useState } from 'react'
import { useEffect } from 'react'

const LoginPage = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const path = useLocation().pathname

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        if (username && password) {
            props.login(username, password)
        }
    }
    useEffect(() => {
        if (path === '/login/demo') {
            props.login('demo', 'demo#demo')
        }
    }, [])

    const { loggingIn } = props
    return (
        <Row>
            <Centered>
                <FormSection>
                    <FormTitle>Login</FormTitle>
                    <form name="form" onSubmit={handleSubmit}>
                        {submitted && !username && (
                            <HelpBlock>Username is required</HelpBlock>
                        )}
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormGroup>
                        {submitted && !password && (
                            <HelpBlock>Password is required</HelpBlock>
                        )}
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                autoComplete="current-password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button>Login</Button>
                        </FormGroup>
                    </form>
                </FormSection>
            </Centered>
        </Row>
    )
}

function mapState(state) {
    const { loggingIn } = state.authentication
    return { loggingIn }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export { connectedLoginPage as LoginPage }
