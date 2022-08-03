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
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const path = useLocation().pathname

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        if (userName && password) {
            props.login(userName, password)
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
                        {submitted && !userName && (
                            <HelpBlock>Username is required</HelpBlock>
                        )}
                        <FormGroup>
                            <Label htmlFor="userName">Username</Label>
                            <Input
                                type="text"
                                name="userName"
                                autoComplete="userName"
                                value={userName}
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
