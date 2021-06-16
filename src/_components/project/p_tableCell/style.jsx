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
    border: 1px solid #333;
    border-collapse: collapse;


&:hover{
  filter:brightness(0.5);
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
    border: 1px solid #333;
    border-collapse: collapse;


    &:hover{
      filter: brightness(0.5);
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
    border: 1px solid #333;
    border-collapse: collapse;
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
    border: 1px solid #333;
    border-collapse: collapse;
    transition-duration:300ms;
  `


export const TitleCell = styled.td`
    display: flex;
    font-weight:500;
    color:#333;
    height:85px;
    width:100%;
    padding:0 15px;
    font-size:16px;
    line-height:1rem;
    border: 1px solid #333;
    border-collapse: collapse;
    transition-duration:300ms;
  `

  export const CellButton = styled.div`
    cursor: pointer;
  `

export const IconButton = styled.a`
--button-size: calc(var(--nav-size) * 0.5);
width: var(--button-size);
height: var(--button-size);

margin:2px;
display:flex;
align-items:center;
justify-content:center;
transition: filter 300ms;

`


export const NavItems = styled.div`
  position: relative;
  width: calc(var(--nav-size) * 0.8);
  display:flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`