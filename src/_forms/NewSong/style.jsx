import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Main = styled.main`
    padding: 30px;
    input {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 5px;
        padding: 5px;
    }
    input,
    textarea,
    select,
    option {
        border-radius: 4px;
        border: 1px solid var(--input-border);
    }
    textarea {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 5px;
        padding: 5px;
        &:focus {
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0);
        }
    }

    input[type='file'] {
        color: var(--text-color);
    }
    .input-group {
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 4px 0 0 4px;
        padding: 5px;
        color: var(--bg-accent);
    }
    span.input-group-btn {
        height: 100%;
        width: 24px;
        background: #f7f7f7;
        border-radius: 0px 4px 4px 0;
        border: none;
        cursor: pointer;
        padding: 5px;
        transition: 300ms;
        &:hover {
            filter: brightness(0.5);
        }
    }
    div.section div.form {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        grid-gap: 0 3rem;
    }
    .create-song-action {
        grid-template-columns: 1fr 1fr;
    }
    .section {
        display: block;
    }
    label {
        display: block;
        font-size: var(--small);
        color: var(--text-color);
        padding-top: 10px;
    }
    h2 {
        display: block;
        grid-column: 1 / -1;
        color: var(--text-color);
        text-align: left;
    }
    #spotify-search {
        border-radius: 4px 0 0 4px;
    }

    button {
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 16px;
        font-weight: 500;
        margin: 10px;
        margin-left: 0px;
        border-radius: 5px;
        background-color: var(--bg-accent);
        color: var(--text-color);
        cursor: pointer;
        transition: 300ms;
        &:hover {
            background-color: var(--blue);
        }
    }
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    grid-gap: 3rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`
export const ArrangmentSection = styled.div`
    display: block;
    height: 100%;
    input {
        height: 100%;
    }
`
export const Btn = styled(Link)`
    padding: 10px;
    text-align: center;
    border: var(--border);
    color: var(--text-color);
    font-size: 16px;
    font-weight: 500;
    margin: 10px;
    border-radius: 5px;
    transition-duration: 0.2s;
    width: 100%;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        background-color: var(--blue);
    }
`

export const RefItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #000;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const IconButton = styled.span`
    width: 10%;
    background: #f7f7f7;
    border-radius: ${(props) => (props.open ? '0' : '0px 4px 4px 0')};
    border: none;
    cursor: pointer;
    padding: 4px;
    transition: 300ms;
    height: 100%;
    &:hover {
        filter: brightness(0.5);
    }
`

export const RefP = styled.p`
    font-size: 12px;
    padding: 5px;
    width: 80%;
`

export const Label = styled.label`
    display: block;
    font-size: var(--small);
    color: var(--dark-text-color);
    padding-top: 10px;
`

export const ButtonIcon = styled.span`
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
