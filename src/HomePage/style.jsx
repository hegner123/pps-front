import styled, { css } from 'styled-components'

export const Header = styled.h1`
align-items: center;
font-size: 40px;
font-weight: 300;
`

export const SubTitle = styled.div`
width: 100%;
margin-top: 5px;
line-height: normal;
`

export const SubText = styled.div`
margin:10px  0;
width: 90%;
font-size:20px;
color:rgb(100, 100, 100);
`

export const ActionList  =  styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
`

export const Action  =  styled.li`
margin-top:30px;
margin-left: ${props => props.spaced ? "15px" : "0"};
`

export const ActionItem = styled.a`
    padding:10px;
    background-color:#333;
    border-radius:5px;
    font-weight:600;
    color:#f7f7f7;
    font-size:20px;
  `

export const RowEven = styled.div`
display:flex;
justify-content: space-evenly;
`

export const EvenSpace = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding:0 100px;
`

export const HeaderContent = styled.div`
width:50%;
`

export const HeaderImage = styled.img`
width:50%;
`
