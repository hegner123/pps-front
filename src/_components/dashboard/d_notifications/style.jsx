import styled, { css } from "styled-components";

export const Card = styled.div`
  width: 150px;
  background: var(--bg-accent);
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
  height: max-content;
`;

export const Notification = styled.div`
  background: var(--noti);
  border-radius: 100%;
  padding: 10px;
  margin-top: -10px;
  margin-right: -10px;
`;

export const AlertWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardTime = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h6`
  font-size: 16px;
  color: var(--text-color);
`;

export const CardBody = styled.div`
  display: flex;
`;

export const CardContent = styled.p`
  font-size: 12px;
  color: var(--text-color);
`;
