import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
} from './style'

const Register = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [hash, setHash] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)
        const user = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            hash: hash,
            recentProjects: [],
        }
        if (user.firstName && user.lastName && user.userName && user.hash) {
            props.register(user)
        }
    }

    return (
        <div>
            <Row>
                <Centered>
                    <FormSection>
                        <FormTitle>Register</FormTitle>
                        <form name="form" onSubmit={handleSubmit}>
                            {submitted && !firstName && (
                                <HelpBlock> First Name is required</HelpBlock>
                            )}
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </FormGroup>
                            {submitted && !lastName && (
                                <HelpBlock> Last Name is required</HelpBlock>
                            )}
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </FormGroup>
                            {submitted && !userName && (
                                <HelpBlock> Username is required</HelpBlock>
                            )}
                            <FormGroup>
                                <Label htmlFor="userName">Username</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="userName"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </FormGroup>
                            {submitted && hash && (
                                <HelpBlock> Password is required</HelpBlock>
                            )}
                            <FormGroup>
                                <Label htmlFor="hash">Password</Label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="hash"
                                    value={hash}
                                    onChange={(e) => setHash(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <div
                                    className="g-recaptcha"
                                    data-sitekey="6LcTDtUbAAAAAESl0q1TsP1LS28g00tIXOiQ7Ktp"
                                ></div>
                            </FormGroup>

                            <FormGroup>
                                <Button>Register</Button>
                            </FormGroup>
                        </form>
                    </FormSection>
                </Centered>
            </Row>
        </div>
    )
}

function mapState(state) {
    const { registering } = state.registration
    return { registering }
}

const actionCreators = {
    register: userActions.register,
}

const connectedRegister = connect(mapState, actionCreators)(Register)
export { connectedRegister as Register }
