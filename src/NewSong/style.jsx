import React from 'react'
import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components'

export const Centered = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height:100%;
`

export const FormGroup = styled.div`
display: flex;
flex-direction: ${props => props.flex ? "row" : "column"};
justify-content: space-between;
margin:10px 0;
`

export const FormSection = styled.div`
width:20%;
/* background:dodgerblue; */
padding:50px;
`

export const FormTitle = styled.h1`
color:var(--text-color);
font-size:30px;
text-align:left;
margin-bottom:10px;
`

export const HelpBlock = styled.div`
font-size:12px;
padding:3px 0;
color:rgb(138, 86, 86);
margin:10px 0 2px;
`
export const Label = styled.label`
color:var(--text-color);
margin-bottom:10px;
`
export const Row = styled.section`
margin-top:100px;
display: flex;
flex-wrap: wrap;
width: 100%;
`

export const Input = styled.input`
width:100%;
border:1px solid rgba(0,0,0,0);
border-radius:5px;
&:focus{
    outline: none;
    border: none;
}
`

export const InputGroup = styled.input`
width:100%;
border:1px solid rgba(0,0,0,0);
border-radius:5px 0 0 5px;
&:focus{
    outline: none;
    border: none;
}
`

export const InputGroupButton = styled.span`
width: 20px;
background: #f7f7f7;
border-radius: 0px 5px 5px 0;
border: none;
cursor: pointer;
padding: 5px;
transition:300ms;
&:hover{
   filter:brightness(0.5);
}
`


export const ActionGroup = styled.div`
width:100%;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
margin:10px 0;
`
export const Btn = styled(Link)`
padding:10px;
text-align:center;
border:var(--border);
color:var(--text-color);
font-size:16px;
font-weight:500;
margin:10px;
border-radius:5px;
transition-duration: 0.2s;
width:100%;
cursor:pointer;
transition:300ms;
&:hover {
    background:var(--bg-accent);
    filter:brightness(1.5);
}
`

export const Button = styled.button`
padding:10px;
border:1px solid rgba(0,0,0,0.1);
font-size:16px;
font-weight:500;
margin:10px;
margin-left:0px;
border-radius:5px;
width:100%;
background-color:var(--bg-accent);
color:var(--text-color);
cursor:pointer;
transition:300ms;
&:hover {
    
    filter:brightness(1.5);
}
`

export const IconButton = styled.span`
--button-size: ${props => props.small ? "calc(var(--nav-size) * 0.2)" : "calc(var(--nav-size) * 0.3)"};
width: var(--button-size);
height: var(--button-size);
background-color: var(--bg-accent);
fill: var(--text-color);
font-size:20px;
border-radius:50%;
padding:${props => props.small ? "3px" : "5px"};
margin-left: ${props => props.close ? "10px" : "20px"};
margin-top:2px;
margin-right:2px;
margin-bottom:2px;
display:flex;
align-items:center;
justify-content:center;
transition: filter 300ms;
cursor: pointer;
&:hover{
  filter: brightness(1.2)
}
`