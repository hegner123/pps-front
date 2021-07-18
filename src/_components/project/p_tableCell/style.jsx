import styled, { css } from "styled-components";

export const CompletedCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  color: #333;
  height: 85px;
  width: 100%;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
  background: rgb(0, 255, 0);
  transition: filter 30ms;
  border: 1px solid #333;
  border-collapse: collapse;

  &:hover {
    filter: brightness(0.5);
  }
  /* here we use the dynamically computed prop */
`;

export const IncompleteCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  color: #333;
  height: 85px;
  width: 100%;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
  background: rgb(255, 0, 0);
  transition: filter 30ms;
  border: 1px solid #333;
  border-collapse: collapse;

  &:hover {
    filter: brightness(0.5);
  }
`;

export const NaCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  height: 85px;
  width: 100%;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;
  background-image: url("");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #333;
  border-collapse: collapse;
`;

export const TextCell = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--table-text-color);
  height: 85px;
  width: 100%;
  padding: 0 15px;
  font-size: var(--h5);
  line-height: 1rem;
  border: 1px solid #333;
  border-collapse: collapse;
  transition-duration: 300ms;
  text-transform: capitalize;
  &:first-child {
    justify-content: flex-start;
    font-weight: bolder;
  }
`;

export const TitleCell = styled.td`
  display: flex;
  color: var(--table-text-color);
  height: 85px;
  width: 100%;
  padding: 0 15px;
  font-size: 10px;
  line-height: 1rem;
  border: 1px solid #333;
  border-collapse: collapse;
  transition-duration: 300ms;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

export const CellButton = styled.div`
  cursor: pointer;
`;

export const IconButton = styled.a`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);

  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
`;

export const NavItems = styled.div`
  position: relative;
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const DropdownSong = styled.a`
  color: var(--text-color);
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  z-index: 10;
  &:hover {
    background-color: var(--bg-accent);
  }
`;
