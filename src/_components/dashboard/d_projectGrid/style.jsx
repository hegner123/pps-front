import styled, { css } from 'styled-components';


export const DashHeader = styled.div`

  margin:5px 15px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const DashTitle = styled.h2`
font-size:40px;
`

export const ProjectSection = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`

export const AddProject = styled.span`
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