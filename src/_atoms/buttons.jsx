import styled from 'styled-components'

export const MenuButton = styled.span`
    --button-size: calc(var(--nav-size) * 0.3);
    position: relative;
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--bg-accent);
    color: var(--text-color);
    font-size: 20px;
    border-radius: 50%;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;

    &:hover {
        cursor: pointer;
        filter: brightness(1.2);
    }
`
