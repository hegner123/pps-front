import styled from "styled-components";

export const AlertBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Alert = styled.div`
  display: block;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${(props) => props.type.Color};
  background-color: ${(props) => props.type.Back};
  border-color: ${(props) => props.type.Border};
`;
