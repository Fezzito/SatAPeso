import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;

  background: rgba(251, 255, 171, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.2px);
  -webkit-backdrop-filter: blur(3.2px);
  border: 1px solid rgba(251, 255, 171, 0.45);
`;

export const Button = styled.div<{
  background: string;
}>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: url(${(props) => props.background});
`;

export const asd = styled.div``;
