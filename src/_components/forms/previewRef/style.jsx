import styled from 'styled-components'

export const IconButton = styled.span`
    --button-size: ${(props) =>
        props.small
            ? 'calc(var(--nav-size) * 0.2)'
            : 'calc(var(--nav-size) * 0.3)'};
    width: var(--button-size);
    height: var(--button-size);
    background-color: var(--bg-accent);
    fill: var(--text-color);
    font-size: 20px;
    border-radius: 50%;
    padding: ${(props) => (props.small ? '3px' : '5px')};
    margin-left: ${(props) => (props.close ? '10px' : '20px')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    cursor: pointer;
    &:hover {
        filter: brightness(1.2);
    }
`

export const Title = styled.p`
    color: var(--dark-text-color);
    width: 75%;
    margin-left: 1rem;
`

export const Artist = styled.p`
    color: var(--dark-text-color);
    font-size: 12px;
    margin: 0 10px;
`
export const Label = styled.label`
    display: block;
    font-size: var(--small);
    color: var(--dark-text-color);
    padding-top: 10px;
`

export const InputGroup = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid var(--input-border);
    border-radius: 4px 0 0 4px !important;
    padding: 5px;
    outline: none;
    &:focus {
        outline: none;
    }
    &:active {
        outline: none;
    }
`
