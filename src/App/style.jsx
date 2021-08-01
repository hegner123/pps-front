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
