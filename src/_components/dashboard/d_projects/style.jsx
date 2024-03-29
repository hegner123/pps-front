import styled from 'styled-components'
export const root = styled.div``

export const DashHeader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    padding: 1rem;
    align-items: center;
`

export const DashTitle = styled.h2`
    font-size: 40px;
    color: var(--text-color);
`

export const ProjectSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`

export const AddProject = styled.span`
    --button-size: calc(var(--nav-size) * 0.3);
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--bg-accent);
    color: var(--text-color);
    font-size: 20px;
    border-radius: 50%;
    padding: 5px;
    margin-left: 20px;
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
