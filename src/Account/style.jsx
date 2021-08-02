import styled from 'styled-components'

export const Main = styled.main`
    justify-content: center;
    margin-top: 2rem;
    color: var(--text-color);
    min-height: 500px;

    section.account {
        display: grid;
        background: grey;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: 'first second third fourth';
    }

    section.user-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: 'first second third fourth';

        margin-top: auto;
        margin-bottom: auto;
    }
    section.user-info .user-img {
        grid-area: second;
        overflow: hidden;
        border-radius: 50%;
    }
    section.user-info div {
        grid-area: third;
        width: max-content;
        margin-top: auto;
        margin-bottom: auto;
    }

    section.account ul {
        grid-area: second;
    }
    section.account .friends,
    section.account .spotify,
    section.account .user-account {
        grid-area: third;
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
