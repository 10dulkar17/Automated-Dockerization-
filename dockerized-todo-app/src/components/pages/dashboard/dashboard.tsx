import React from "react";
import { MenuItemProps } from "../../../interfaces/menu";

import { Container, Content, NavMenu } from "./dashboard.styles";
import ItemMenu from "../../atoms/item-menu/item-menu";
import HeadingBar from "../../organisms/heading-bar/heading-bar";

const ITEMS_MENU: Array<MenuItemProps> = [
  { label: "Home", destination: "/" },
  { label: "Tasks", destination: "/tasks" },
];
const Dashboard: React.FC<any> = () => {
  const renderItems = ITEMS_MENU.map((item, index) => {
    return (
      <ItemMenu label={item.label} destination={item.destination} key={index} />
    );
  });
  return (
    <Container>
      <Content>
        <NavMenu>{renderItems}</NavMenu>

        <HeadingBar label="Dashboard" />
      </Content>
    </Container>
  );
};

export default Dashboard;
