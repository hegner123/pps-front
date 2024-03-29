import styled from 'styled-components'

export const Main = styled.div`
    .arrange-editor {
        display: grid;
        grid: auto / repeat(1, 1fr);
        grid-gap: 10px;
    }
    .input-group {
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
    }
`

export const IconButton = styled.span`
    width: 20px;
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
