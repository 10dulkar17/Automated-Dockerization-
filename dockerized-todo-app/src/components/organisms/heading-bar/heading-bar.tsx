import React from "react";
import styled from "styled-components";

interface IProps {
  label: string;
}

const Container = styled.div`
  height: fit-content;
  width: 100%;
  padding-inline: 15px;

  .label {
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

const HeadingBar: React.FC<IProps> = ({ label }) => {
  return (
    <Container>
      <p className="label">{label}</p>
    </Container>
  );
};

export default HeadingBar;
