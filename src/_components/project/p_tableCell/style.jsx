import styled, { css } from 'styled-components'



export const CompletedCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bold;
    color:#333;
    height:85px;
    width:100%;
    padding:0 15px;
    font-size:16px;
    cursor: pointer;
    background: rgb(0,255,0);
    transition: filter 30ms;


&:hover{
  filter: brightness(1.5);
}
    /* here we use the dynamically computed prop */
  `

export const  IncompleteCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bold;
    color:#333;
    height:85px;
    width:100%;
    padding:0 15px;
    font-size:16px;
    cursor: pointer;
    background: rgb(255,0,0) ;
    transition: filter 30ms;


    &:hover{
      filter: brightness(1.5);
    }
`

export const NaCell = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bold;
    color:#333;
    height:85px;
    width:100%;
    padding:0 15px;
    font-size:16px;
    cursor: pointer;
    background-image: url('');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
`


export const TextCell = styled.td`
    display: flex;
    font-weight:500;
    color:#333;
    height:85px;
    width:100%;
    padding:0 15px;
    font-size:16px;
    line-height:1rem;
  `