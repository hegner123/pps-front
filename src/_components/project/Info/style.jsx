import styled from "styled-components";

export const InfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid: 100px auto / 90%;
  justify-content: center;
`;

export const TitleGrid = styled.div`
  width: 100%;
  display: grid;
  grid: auto / repeat(3, 1fr);
  align-items: center;
`;

export const ProjectInfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid: auto / repeat(3, 1fr);
  grid-gap: 10px;
  margin: 5px;
`;

export const Title = styled.div`
  color: var(--white);
`;

export const Field = styled.div`
  color: var(--white);
`;
