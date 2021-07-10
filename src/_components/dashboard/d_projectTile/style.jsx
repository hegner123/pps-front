import styled, { css } from "styled-components";

export const ProjectsTile = styled.div`
  width: 205px;
  height: 48px;
  background: var(--bg-accent);

  border-radius: 20px;
  margin: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 300ms;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const TileHeader = styled.h5`
  color: var(--text-color);
  font-weight: 400;
  font-size: 16px;
`;
