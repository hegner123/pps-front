import styled, { css } from 'styled-components'

export const Brand  = styled.div`
  display:flex;
  align-items:center;
  flex-grow: 1;
`

export const BrandLink = styled.a`
margin-left:10px;
font-size:30px;
color:#333333;
`

export const Search  = styled.div`
  flex-grow: 5;
  display: flex;
  justify-content: flex-start;
`

export const AdminControls = styled.ul`
  display: flex;
  flex-grow:2;
  justify-content: flex-end;
  align-items: center;
`

export const AdminItem = styled.li`
  margin-left:10px;
  margin-right:10px;
  transition:0.2s;
`

export const AdminBar = styled.nav`
background:#ffffff;
box-shadow: 0 5px 5px  rgba(58, 58, 58, 0.171);
padding:10px 0;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
width:100%;
`

export const Input = styled.input`
width:100%;
border:1px solid rgba(0,0,0,0.1);
border-radius:5px;
`

export const Logout = styled.a`
  cursor: pointer;
  color:#333;
`

export const Profile = styled.a`
  color:#333;
`