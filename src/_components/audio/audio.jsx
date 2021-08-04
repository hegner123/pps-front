import React from 'react'
import { Container } from './style'

export const Audio = (props) => {
    return (
        <div
            css={
                'background-color:#fff; min-height:100vh;display:flex;justify-content:center;align-items:center;'
            }
        >
            <Player />
        </div>
    )
}

const Player = (props) => {
    return (
        <Container>
            <div className="controls"><span>Play</span>
            <span>Pause</span></div>
        </Container>
    )
}
