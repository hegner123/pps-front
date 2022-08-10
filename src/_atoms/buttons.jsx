import styled from 'styled-components'

export const IconButton = styled.span`
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

export const ButtonIcon = styled.span`
    width: 28px;
    display: flex;
    font-size: 1rem;
    background: #f7f7f7;
    border-radius: ${(props) => (props.open ? '0' : '0px 4px 4px 0')};
    border: none;
    cursor: pointer;
    padding: 4px;
    transition: 300ms;
    &:hover {
        filter: brightness(0.5);
    }
`
