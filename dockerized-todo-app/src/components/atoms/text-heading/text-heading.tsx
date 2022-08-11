import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 500;
  font-size: 30px;
`;

const TextHeading: React.FC<any> = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default TextHeading;
