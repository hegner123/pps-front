import React, { useEffect, useState } from 'react'

const ForgotPassword = (props) => {
    const [hasPassword, setPassword] = useState('')
    const [hasConfirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (hasPassword === hasConfirmPassword) {
            props.resetPassword(hasPassword)
        }
    }

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={hasPassword}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    id="confirmPassword"
                    value={hasConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

function mapState(state) {
    const { authentication } = state
    return { authentication }
}

const actionCreators = {
    resetPassword: userActions.resetPassword,
}

const connectedForgotPassword = connect(
    mapState,
    actionCreators
)(ForgotPassword)
export { connectedForgotPassword as ForgotPassword }
