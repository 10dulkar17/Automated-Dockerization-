import React from "react";
import styled from "styled-components";

interface IProps {
  label?: string;
  placeholder: string;
  type: string;
  name?: string;
}

const LabelComponent = styled.label`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 12px;
  margin-bottom: 15px;
  width: 100%;
`;

const InputComponent = styled.input`
  margin: 5px 0px 0px 0px;
  border-radius: 12px;
  padding-block: 7.5px;
  padding-inline: 10px;
  font-size: 15px;
  border: 1.5px solid ${(props) => props.theme.colors.secondary};
  transition: border-color 0.5s;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.brand};
  }

  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.colors.brand};
  }

  &:visited {
    outline: none;
    color: yellow;
  }
`;

const InputWithLabel: React.FC<IProps> = ({
  label,
  placeholder,
  type,
  name,
}) => {
  return (
    <LabelComponent>
      {label}
      <InputComponent id={name} type={type} placeholder={placeholder} />
    </LabelComponent>
  );
};

export default InputWithLabel;
