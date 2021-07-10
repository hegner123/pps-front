import styled, { css } from "styled-components";

export const Row = styled.section`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormSection = styled.div`
  width: 20%;
`;

export const FormTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: var(--text-color);
`;

export const FormRegister = styled.span``;

export const HelpBlock = styled.div`
  font-size: 12px;
  padding: 3px 0;
  color: rgb(138, 86, 86);
  margin: 10px 0 2px;
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  border-radius: 5px;
  transition-duration: 0.2s;
  width: 100%;
  background-color: var(--bg-accent);
  color: var(--text-color);
  cursor: pointer;
  transition: 10ms;
  &:hover {
    background: #3568bf;
    color: #e3fdff;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: var(--text-color);
`;

export const Input = styled.input`
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  font-size: var(--input-font-size);
  padding: var(--input-padding);
`;
