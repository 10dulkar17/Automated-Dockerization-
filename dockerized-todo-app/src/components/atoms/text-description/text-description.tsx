import React from "react";
import styled from "styled-components";

const Description = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-weight: 400;
  font-size: 15px;
`;

const TextDescription: React.FC<any> = ({ children }) => {
  return <Description>{children}</Description>;
};
export default TextDescription;
