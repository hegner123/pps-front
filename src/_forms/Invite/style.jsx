import styled from 'styled-components'
import { IconButton } from '../../_atoms'

export const Modal = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
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

export const FormParent = styled.form`
    grid-column: 1/-1;
`
export const InviteUserSearch = styled.input`
    width: calc(100% - 8px);
    border-radius: 3px;
    padding: 0;
`

export const ResultsParent = styled.div`
    grid-column: 1/-1;
    grid-row: 3/-2;
    border: 1px solid black;
    border-radius: 3px;
    background: #f5f5f5;
`