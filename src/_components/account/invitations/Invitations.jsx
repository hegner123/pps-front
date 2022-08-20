import React, { useEffect, useState } from 'react'
import {
    InvitationsGrid,
    InvitationCard,
    ProjectName,
    ProjectHost,
    AcceptButton,
    DeclineButton,
} from './style'

export const Invitations = (props) => {
    // const [,] = useState()

    // useEffect(() => {
    //     console.log('test')
    // }, [])
    return (
        <>
            <InvitationsGrid>
                <div>
                    <ul>
                        <InvitationCard>
                            <ProjectName>Project Name</ProjectName>
                            <ProjectHost>Project Host</ProjectHost>
                            <AcceptButton>Accept</AcceptButton>
                            <DeclineButton>Decline</DeclineButton>
                        </InvitationCard>
                    </ul>
                </div>
            </InvitationsGrid>
        </>
    )
}
