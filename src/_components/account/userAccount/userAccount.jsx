import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ChromePicker } from 'react-color'
import { userActions } from '../../../_actions'
import { SettingScreen, SettingLabel, SettingLi, ColorDisplay } from '../style'
import { ColorPicker } from '../../atoms'
import { ResetPass } from '../../../_forms/ResetPass'

const UserAccount = (props) => {
    const [isEdit, setEdit] = useState('')
    const [hasCompleteColor, setCompleteColor] = useState('')
    const [hasIncompleteColor, setIncompleteColor] = useState('')
    const [hasResetPassword, setResetPassword] = useState(false)

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
        }
        props.saveSettings(userId, settings)
    }

    function handleSetEdit(field) {
        if (isEdit === field) {
            setEdit('')
        } else {
            setEdit(field)
        }
    }

    return (
        <SettingScreen>
            <ul>
                <SettingLi css={'margin-top:10px;margin-bottom:10px;'}>
                    <SettingLabel>Reset password:</SettingLabel>
                    <button onClick={() => setResetPassword(!hasResetPassword)}>
                        Reset
                    </button>
                    {hasResetPassword && <ResetPass />}
                </SettingLi>
                <SettingLi css={'margin-top:10px;margin-bottom:10px;'}>
                    <SettingLabel>Complete Color: </SettingLabel>
                    <ColorDisplay
                        onClick={() => handleSetEdit('CompleteColor')}
                        color={hasCompleteColor}
                    >
                        <ColorPicker
                            showPicker={isEdit === 'CompleteColor'}
                            color={hasCompleteColor}
                            setColor={setCompleteColor}
                        />
                    </ColorDisplay>
                </SettingLi>
                <SettingLi css={'margin-top:10px;margin-bottom:10px;'}>
                    <SettingLabel>Incomplete Color: </SettingLabel>
                    <ColorDisplay
                        onClick={() => handleSetEdit('IncompleteColor')}
                        color={hasIncompleteColor}
                    >
                        <ColorPicker
                            showPicker={isEdit === 'IncompleteColor'}
                            color={hasIncompleteColor}
                            setColor={setIncompleteColor}
                        />
                    </ColorDisplay>
                </SettingLi>
                <SettingLi>
                    <SettingLabel>
                        <button
                            onClick={() =>
                                submitSettings(props.authentication.user._id)
                            }
                        >
                            Save
                        </button>
                    </SettingLabel>
                </SettingLi>
            </ul>
        </SettingScreen>
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
