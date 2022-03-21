import styled from "styled-components";

export const ButtonEl = styled.button`
  display: block;
  margin: auto;
  height: 45px;
  background: #52b6ff;
  border-radius: 4.63636px;
  width: 100%;
  max-width: 90%;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:disabled {
    background: #d3d3d3;
    cursor: not-allowed;
  }
`;