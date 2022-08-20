import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useOnClickOutside } from '../../_hooks/onClickOutside'
import { uiActions, userActions } from '../../_actions'
import {
    Modal,
    CloseMenuButton,
    InviteUserSearch,
    FormParent,
    ResultsParent,
    s,
} from './style'
import { SearchResult } from './searchResult'
import { Close } from '../../_assets/icons'

function Invite(props) {
    const [hasEmail, setEmail] = useState('')
    const [hasRecipient, setRecipient] = useState('')
    const ref = useRef(null)

    useOnClickOutside(ref, () => props.setInviteClose())

    const handleOnChange = (event) => {
        setEmail(event.target.value)
    }
    function handleSendInvite(e, userName) {
        e.preventDefault()

        const args = {
            user: hasRecipient,
            projectSlug: props.userProjects.current.projectSlug,
            projectId: props.userProjects.current._id,
            userName: userName,
            id: props.authentication.user._id,
        }

        props.sendInvite(args)
    }
    const handleOnChangeRecipient = (event) => {
        {
            hasRecipient.includes(props.user.findUsers._id)
                ? setRecipient(
                      hasRecipient.filter(
                          (item) => item !== props.user.findUsers._id
                      )
                  )
                : setRecipient([...hasRecipient, props.user.findUsers._id])
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (hasEmail.length > 2) {
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
                    <FormParent action="">
                        <label htmlFor="email">Email</label>
                        <InviteUserSearch
                            type="email"
                            name="email"
                            id="email"
                            value={hasEmail}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </FormParent>
                    <ResultsParent>
                        {!props.user.isLoading && (
                            <>
                                {props.user.findUsers.userName ? (
                                    <SearchResult
                                        userName={props.user.findUsers.userName}
                                        id={props.user.findUsers._id}
                                        handleOnChangeRecipient={(e) =>
                                            handleOnChangeRecipient(e)
                                        }
                                    />
                                ) : (
                                    <div>{props.user.findUsers}</div>
                                )}
                            </>
                        )}
                    </ResultsParent>
                    <button
                        css={`
                            grid-column: -3/-1;
                            grid-row: -2/-1;
                        `}
                        type="submit"
                        onClick={(e) =>
                            handleSendInvite(
                                e,
                                props.authentication.user.userName
                            )
                        }
                    >
                        Send Invite
                    </button>
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
