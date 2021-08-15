import styled, { css } from "styled-components";

export const EvenSpace = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: calc(100vh - 64px);
  padding: 0 100px;
`;

export const Header = styled.h1`
  color: var(--text-color);
  align-items: center;
  font-size: 40px;
  font-weight: 300;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.div`
  width: 100%;
  margin-top: 5px;
  line-height: normal;
`;

export const SubText = styled.div`
  margin: 10px 0;
  width: 90%;
  font-size: 20px;
  color: var(--text-color);
`;

export const ActionList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Action = styled.li`
  margin-top: 30px;
  margin-left: ${(props) => (props.spaced ? "15px" : "0")};
`;

export const ActionItem = styled.a`
  padding: 10px;
  background-color: var(--bg-accent);
  border-radius: 5px;
  font-weight: 600;
  color: var(--text-color);
  font-size: 20px;
  &:hover {
    background: #3568bf;
    color: #e3fdff;
  }
`;

export const HeaderImage = styled.img`
  width: 50%;
`;
