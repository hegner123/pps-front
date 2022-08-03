import styled from 'styled-components'

export const Main = styled.main`
    justify-content: center;
    margin-top: 2rem;
    color: var(--text-color);
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`

export const AccountMenuItem = styled.li`
    list-style: ${(props) => (props.active ? 'disc' : '')};
`
