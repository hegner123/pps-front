import styled from 'styled-components'

export const Main = styled.main`
    justify-content: center;
    margin-top: 2rem;
    color: var(--text-color);
    min-height: 500px;
`

export const AccountMenuItem = styled.li`
    list-style: ${(props) => (props.active ? 'disc' : '')};
`
