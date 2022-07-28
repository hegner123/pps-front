import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

const Register = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [hash, setHash] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setSubmitted(true)
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: userEmail,
            userName: userName,
            hash: hash,
            recentProjects: [],
        }
        if (
            user.firstName &&
            user.lastName &&
            user.email &&
            user.userName &&
            user.hash
        ) {
            props.register(user)
        }
    }

    return (
        <div className="form-block">
            <div className="block">
                <h2>Register</h2>
                <form name="form" onSubmit={handleSubmit}>
                    {submitted && !firstName && <p> First Name is required</p>}
                    <div>
                        <div className="field-group">
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            {submitted && !lastName && (
                                <p> Last Name is required</p>
                            )}
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="field-group">
                            {submitted && !userEmail && (
                                <p> Email is required</p>
                            )}
                            <div className="input-field">
                                <label htmlFor="userEmail">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="userEmail"
                                    value={userEmail}
                                    onChange={(e) =>
                                        setUserEmail(e.target.value)
                                    }
                                />
                            </div>
                            {submitted && !userName && (
                                <p> Username is required</p>
                            )}
                            <div className="input-field">
                                <label htmlFor="userName">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="userName"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {submitted && !hash && <p> Password is required</p>}
                        <div className="input-field">
                            <label htmlFor="hash">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="hash"
                                value={hash}
                                onChange={(e) => setHash(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            {/* <div
                                className="g-recaptcha"
                                data-sitekey="6LcTDtUbAAAAAESl0q1TsP1LS28g00tIXOiQ7Ktp"
                            ></div> */}
                        </div>

                        <div>
                            <button>Register</button>
                        </div>
                    </div>
                </form>
            </div>
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
