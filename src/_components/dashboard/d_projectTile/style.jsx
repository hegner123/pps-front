import styled, { css } from 'styled-components'

export const ProjectsTile = styled.div`
  width:205px;
  height:48px;
  background:rgb(240, 240, 240);
  box-shadow:0 0 5px #333;
  border-radius: 20px;
  margin:50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration:10ms;

&:hover {
  background:#e3fdff;
  color:#fff;
}
`

export const TileHeader = styled.h5`
  font-weight:400;
  font-size:16px;
  `