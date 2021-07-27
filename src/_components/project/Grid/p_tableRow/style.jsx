import styled from "styled-components";

export const TableRows = styled.tr`
  display: grid;
  grid: 100px / repeat(${(props) => props.grid} , 1fr);
`;
