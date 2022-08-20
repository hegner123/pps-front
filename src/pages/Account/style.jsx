import styled from 'styled-components'

export const Main = styled.main`
    justify-content: center;
    margin-top: 2rem;
    color: var(--text-color);
    min-height: 500px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`

export const ProfileSection = styled.section`
    grid-column: 4/-4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 300px;
`

export const ProfileImageParent = styled.div`
    display: grid;
    justify-content: center;
`

export const AccountSection = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 4/-4;
`
export const AccountMenu = styled.ul`
    display: grid;
    grid-column: 1/3;
    margin-top: 2rem;
    grid-template-rows: repeat(auto-fit, 40px);
`
export const AccountMenuItem = styled.li`
    list-style: ${(props) => (props.active ? 'disc' : '')};
`

export const ControlPanel = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 3/-1;
    height: 500px;
    background-color: var(--white);
    padding: 1rem;
`