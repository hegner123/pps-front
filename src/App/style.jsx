import styled from 'styled-components'

export const AlertBar = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25%;
`

export const Alert = styled.div`
    display: block;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${(props) => props.type.Color};
    background-color: ${(props) => props.type.Back};
    border-color: ${(props) => props.type.Border};
    cursor: pointer;
`
export const TopLevel = styled.div`
    .form-block {
        display: grid;
        min-height: 100vh;
        width: 100%;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    label {
        display: block;
    }

    .block {
        background: #f7f7f7;
        padding: 4rem;
        border-radius: 15px;
    }

    .input-field {
        display: block;
        font-size: 0.75rem;
    }

    .field-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
`
export const InviteModal = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background: #00000075;
    top: 0;
    display: grid;
    justify-content: center;
    align-items: center;
`
