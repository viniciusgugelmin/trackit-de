import styled from "styled-components";

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 6px;
`;

export const InputEl = styled.input`
  display: block;
  margin: auto;
  height: 45px;
  max-width: 90%;
  width: 100%;
  outline: none;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 9px 11px 11px 11px;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  &::placeholder {
    color: #dbdbdb;
  }
`;