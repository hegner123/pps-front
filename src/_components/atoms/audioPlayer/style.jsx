import styled from 'styled-components'

export const Wrapper = styled.div`
    .wrapper {
        display: grid;
        grid: repeat(2, 1fr) / repeat(4, 1fr);
        height: 100%;
    }
    .controls {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }
    .info {
        * {
            color: black;
        }
    }
    .player {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }
    .play-pause {
    }
    .time {
        width: max-content;
    }

    .small-text {
        color: black;
        font-size: 12px;
    }
`

export const Play = styled.div`
    max-width: 100px;
    transform: scale(0.3);
    cursor: pointer;
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(0.8);
    }
`

export const Pause = styled.div`
    max-width: 100px;
    transform: scale(0.3);
    cursor: pointer;
    &svg:hover {
        filter: brightness(0.8);
    }
    &svg:active {
        filter: brightness(0.8);
    }
`

export const Previous = styled.div`
    transform: scale(0.3);
    cursor: pointer;
    &svg:hover {
        filter: brightness(0.8);
    }
    &svg:active {
        filter: brightness(0.5);
    }
`
