import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid: 100% / 2fr 1fr;
  background: #fff;
  grid-gap: 20px;
  padding: 30px;
`;

export const Section = styled.section`
  display: block;
`;

export const Group = styled.div`
  display: grid;
  grid: 50vh / repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Centered = styled.div``;

export const Label = styled.label`
  display: block;
  /* color: var(--text-color);
  margin-bottom: 10px; */
`;

export const Form = styled.div`
  display: grid;
  grid: auto / auto;
`;

export const FormSection = styled.div``;

export const FormInnerSection = styled.section`
  /* margin: 10px; */
`;

export const FormGroup = styled.div`
  /* margin: 10px 0; */
`;

export const FormTitle = styled.h2`
  display: block;
  grid-column: 1 / -1;

  /* color: var(--text-color);
  font-size: 30px;
  text-align: left;
  margin-bottom: 10px; */
`;

export const Browser = styled.aside`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  overflow: auto;
  height: 90%;
  border: none;
  margin: 0 100px; */
`;

export const Preview = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px; */
`;

export const Title = styled.p`
  /* color: var(--text-color);
  width: 75%; */
`;

export const Artist = styled.p`
  /* color: var(--text-color);
  font-size: 12px;
  margin-left: 10px; */
`;

export const HelpBlock = styled.div`
  /* font-size: 12px;
  padding: 3px 0;
  color: rgb(138, 86, 86);
  margin: 10px 0 2px; */
`;

export const Input = styled.input`
  /* width: 100%;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
  } */
`;

export const InputGroup = styled.input`
  /* width: 100%;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px 0 0 5px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
  } */
`;

export const InputGroupButton = styled.span`
  /* width: 20px;
  background: #f7f7f7;
  border-radius: 0px 5px 5px 0;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: 300ms;
  &:hover {
    filter: brightness(0.5);
  } */
`;

export const ActionGroup = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0; */
`;

export const Btn = styled(Link)`
  /* padding: 10px;
  text-align: center;
  border: var(--border);
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
  border-radius: 5px;
  transition-duration: 0.2s;
  width: 100%;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background: var(--bg-accent);
    filter: brightness(1.5);
  } */
`;

export const Button = styled.button`
  /* padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 500;
  margin: 10px;
  margin-left: 0px;
  border-radius: 5px;
  width: 100%;
  background-color: var(--bg-accent);
  color: var(--text-color);
  cursor: pointer;
  transition: 300ms;
  &:hover {
    filter: brightness(1.5);
  } */
`;

export const IconButton = styled.span`
  --button-size: ${(props) =>
    props.small
      ? "calc(var(--nav-size) * 0.2)"
      : "calc(var(--nav-size) * 0.3)"};
  width: var(--button-size);
  height: var(--button-size);
  background-color: var(--bg-accent);
  fill: var(--text-color);
  font-size: 20px;
  border-radius: 50%;
  padding: ${(props) => (props.small ? "3px" : "5px")};
  margin-left: ${(props) => (props.close ? "10px" : "20px")};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export const ArrangmentSection = styled.div`
  display: block;
  height: 100%;
  input {
    height: 100%;
  }
`;
