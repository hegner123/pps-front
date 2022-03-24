import styled from 'styled-components'

export const InfoGrid = styled.div`
    max-width: 57rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    grid-gap: 1rem;
    align-items: center;
    .bpm {
        grid-column: 1/2;
    }
    .key {
        grid-column: 2/3;
    }
    .references {
        grid-column: 3/4;
        grid-row: 2/-1;
    }
    .lyrics {
        grid-column: 1/2;
        grid-row: 3/4;
    }
    .notes {
        grid-column: 2/3;
        grid-row: 3/4;
    }
    .members {
        color: var(--white);
    }

    div {
    }
`

export const ProjectInfoGrid = styled.div`
    width: 100%;
    display: grid;
    grid: auto / repeat(3, 1fr);
    grid-gap: 10px;
    margin: 5px;
`

export const Title = styled.div`
    h2 {
        color: var(--white);
    }
`

export const Field = styled.div`
    h2 {
    }
    color: var(--white);
`
