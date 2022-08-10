import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useOnClickOutside } from '../../../_hooks/onClickOutside'
import { uiActions, userActions } from '../../../_actions'
import { Modal, CloseMenuButton } from './style'

import Close from '../../../_assets/icons/close.svg'

function Invite(props) {
    const [hasEmail, setEmail] = useState('')
    const ref = useRef(null)
    useOnClickOutside(ref, () => props.setInviteClose())

    function handleSendInvite(e, userName) {
        e.preventDefault()
        console.log(hasEmail)

        const args = {
            projectSlug: '',
            projectId: '',
            userName: userName,
            id: '',
        }
    }
    const handleOnChange = (event) => {
        setEmail(event.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (hasEmail.length > 2) {
                console.log(
                    `I can see you're not typing. I can use "${hasEmail}" now!`
                )
                props.findUsers(hasEmail)
            }
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [hasEmail])

    return (
        <>
            {props.userInterface.inviteOpen ? (
                <Modal>
                    <h3
                        css={`
                            grid-column: 1/-6;
                        `}
                    >
                        Invite users to <i>project name</i>
                    </h3>
                    <CloseMenuButton onClick={() => props.setInviteClose()}>
                        <Close />
                    </CloseMenuButton>
                    <form
                        action=""
                        css={`
                            grid-column: 7/-2;
                        `}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={hasEmail}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </form>
                    <div
                        css={`
                            grid-column: 6/-1;
                        `}
                    >
                        {!props.user.isLoading && (
                            <>
                                {props.user.findUsers.userName ? (
                                    <div
                                        css={`
                                            display: flex;
                                        `}
                                    >
                                        <p>{props.user.findUsers.userName}</p>
                                        <button
                                            type="submit"
                                            onClick={(e) =>
                                                handleSendInvite(
                                                    e,
                                                    props.user.findUsers
                                                        .userName
                                                )
                                            }
                                        >
                                            Send Invite
                                        </button>
                                    </div>
                                ) : (
                                    <div>{props.user.findUsers}</div>
                                )}
                            </>
                        )}
                    </div>
                </Modal>
            ) : (
                <></>
            )}
        </>
    )
}

function mapState(state) {
    const { authentication, monitor, userProjects, userInterface, user } = state
    return { authentication, monitor, userProjects, userInterface, user }
}

const actionCreators = {
    sendInvite: userActions.sendInvite,
    handleInvitation: userActions.handleInvitation,
    checkInvites: userActions.checkInvites,
    findUsers: userActions.findUsers,
    setInviteClose: uiActions.setInviteClose,
}

const connectedInvite = connect(mapState, actionCreators)(Invite)
export { connectedInvite as Invite }
