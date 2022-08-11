import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.lightGray};
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  margin-right: 7px;
  &:checked {
    background-color: yellow;
  }
`;
