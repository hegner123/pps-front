import styled, { css } from "styled-components";

export const TableRow = styled.tr`
  display: grid;
  grid: 100px / repeat(${(props) => props.grid}, 1fr);
`;
