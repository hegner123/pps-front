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
align-items: center;
font-size:20px;
padding:1px;
background:#fff;
border-radius:1000px;
margin-left:10px;
transition-duration:10ms;
box-shadow:0 0 5px #333;

&:hover {
  background:#e3fdff;
}
`