import React from "react";
import styled from "styled-components";

import { MenuItemProps } from "../../../interfaces/menu";

const Item = styled.a`
  text-decoration: none;
  padding-block: 5px;
  transition: all 0.2s;
  color: ${(props) => props.theme.colors.secondary};
  font-size: auto;
  font-weight: bold;
  text-align: left;
  width: auto;
  border-radius: inherit;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #000000;
  }
`;

const ItemMenu: React.FC<MenuItemProps> = ({ label, destination }) => {
  return <Item href={destination}>{label}</Item>;
};

export default ItemMenu;
