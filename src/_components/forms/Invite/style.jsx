import styled from 'styled-components'
import { IconButton } from '../../../_atoms'

export const Modal = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 1rem;
    color: grey;
    background: white;
    border: 3px solid black;
    border-radius: 3px;
    width: 600px;
    height: 300px;
    margin: 1rem;
    z-index: 30;
`
export const CloseMenuButton = styled(IconButton)`
    grid-column: -1;
    color: white;
`
