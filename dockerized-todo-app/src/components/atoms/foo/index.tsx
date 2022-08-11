import React from "react";
import { withTheme } from "styled-components";

const FooComponent: React.FC<any> = ({ theme }) => {
  return (
    <div>
      <h1>Hello World {theme.current}</h1>
    </div>
  );
};

export default withTheme(FooComponent);
