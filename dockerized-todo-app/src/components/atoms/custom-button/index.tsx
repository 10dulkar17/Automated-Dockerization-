import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 5px;
`;

const CustomButton: React.FC<any> = ({ children, onClick, style }) => {
  return (
    <Button onClick={onClick} style={style}>
      {children}
    </Button>
  );
};
export default CustomButton;
