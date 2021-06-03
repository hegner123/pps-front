import styled, { css } from 'styled-components'

export const ProjectTitle = styled.h1`
font-size:30px;
`

export const ProjectDetails = styled.div`
padding:10px 10px;
display: flex;
align-items: center;
`

export const AddSong = styled.span`
--button-size: calc(var(--nav-size) * 0.3);
width: var(--button-size);
height: var(--button-size);
background-color: var(--bg-accent);
color: var(--text-color);
font-size:20px;
border-radius:50%;
padding:5px;
margin-left: 20px;
margin-top:2px;
margin-right:2px;
margin-bottom:2px;
display:flex;
align-items:center;
justify-content:center;
transition: filter 300ms;

&:hover{
  filter: brightness(1.2)
}
`