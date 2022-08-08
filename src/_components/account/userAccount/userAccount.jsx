import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { ChromePicker } from 'react-color'
import { userActions } from '../../../_actions'

const UserAccount = (props) => {
    const [isEdit, setEdit] = useState(false)
    const initState = 'Setting'
    const [passwordReset, setPasswordReset] = useState('')
    const [hasCompleteColor, setCompleteColor] = useState('')
    const [hasIncompleteColor, setIncompleteColor] = useState('')
    const [hasTheme, setTheme] = useState('')

    useEffect(() => {
        setCompleteColor(props.authentication.user.userSettings.completeColor)
        setIncompleteColor(
            props.authentication.user.userSettings.incompleteColor
        )
    }, [])

    function submitSettings(userId) {
        const settings = {
            completeColor: hasCompleteColor,
            incompleteColor: hasIncompleteColor,
            theme: hasTheme,
        }
        props.saveSettings(userId, settings)
    }

    const display = (
        <>
            <ul>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    Reset password:
                    <button onChange={(e) => ''}>Reset</button>
                </li>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    Complete Color:{' '}
                    <span
                        css={`
                            background-color: ${hasCompleteColor};
                            width: 200px;
                            padding: 1px 100px;
                        `}
                    ></span>
                </li>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    Incomplete Color:{' '}
                    <span
                        css={`
                            background-color: ${hasIncompleteColor};
                            width: 200px;
                            padding: 1px 100px;
                        `}
                    ></span>
                </li>
            </ul>
        </>
    )
    const edit = (
        <>
            <button
                onClick={() => submitSettings(props.authentication.user._id)}
            >
                Save
            </button>
            <ul>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    <label htmlFor="passwordReset">Reset password:</label>
                    <input
                        id="passwordReset"
                        name="passwordReset"
                        type="text"
                        value={passwordReset}
                        onChange={(e) => setPasswordReset(e.target.value)}
                    />
                </li>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    Complete Color:{' '}
                    <ChromePicker
                        color={hasCompleteColor}
                        onChange={(color) => setCompleteColor(color.hex)}
                    />
                </li>
                <li css={'margin-top:10px;margin-bottom:10px;'}>
                    Incomplete Color:{' '}
                    <ChromePicker
                        color={hasIncompleteColor}
                        onChange={(color) => setIncompleteColor(color.hex)}
                    />
                </li>
            </ul>
        </>
    )
    return (
        <div className="user-account">
            <div
                css={`
                    display: flex;
                `}
            >
                <h2>Account Options</h2>
                <button
                    css={`
                        height: min-content;
                        align-self: center;
                        margin-left: 10px;
                    `}
                    onClick={() => setEdit(!isEdit)}
                >
                    Edit
                </button>
            </div>

            {isEdit ? edit : display}
        </div>
    )
}

function mapState(state) {
    const { authentication } = state
    return { authentication }
}

const actionCreators = {
    saveSettings: userActions.saveSettings,
}

const connectedUserAccount = connect(mapState, actionCreators)(UserAccount)
export { connectedUserAccount as UserAccount }
