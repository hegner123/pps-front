import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-content: center;
    background: #fff;
    color: #333;
    height: 500px;

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
        grid-column: 2/3;
        display: grid;
        justify-content: center;
    }
    section.account-section {
        grid-column: 3/4;
        display: grid;
        justify-content: flex-start;
    }
`

export const AccountMenuItem = styled.li`
    list-style: ${(props) => (props.active ? 'disc' : '')};
`
