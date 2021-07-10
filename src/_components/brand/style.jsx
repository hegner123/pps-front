import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const BrandLink = styled.a`
  margin-left: 10px;
  font-size: 30px;
  color: var(--text-color);
`;

export const Search = styled.div`
  flex-grow: 5;
  display: flex;
  justify-content: flex-start;
`;

export const AdminControls = styled.ul`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  align-items: center;
`;

export const AdminItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.2s;
`;

export const AdminBar = styled.nav`
  background: var(--bg-accent);
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 5px;
`;

export const Logout = styled.a`
  cursor: pointer;
  color: #333;
`;

export const Profile = styled.a`
  color: #333;
`;

export const NavItems = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IconButton = styled.a`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: var(--bg);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }
`;
