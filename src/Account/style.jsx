import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    margin-top: 2rem;
    color: var(--text-color);
    min-height: 500px;

    section.user-info {
        grid-column: 2 /3;
        grid-auto-flow: column;
        grid-column-gap: 20px;
        display: grid;
        margin-top: auto;
        margin-bottom: auto;
    }
    section.user-info .user-img {
        overflow: hidden;
        border-radius: 50%;
    }
    section.user-info div {
        display: grid;
        width: max-content;
        margin-top: auto;
        margin-bottom: auto;
    }

    aside.account-menu {
        margin-top: auto;
        margin-bottom: auto;
        grid-column: 2;
        grid-template-columns: 0.25fr 1fr;
        display: grid;
        grid-auto-flow: column;
    }
    aside.account-menu ul.account-menu-items {
        width: 200px;
    }
    aside.account-menu div {
        width: max-content;
    }
`

export const AccountMenuItem = styled.li`
    list-style: ${(props) => (props.active ? 'disc' : '')};
`
