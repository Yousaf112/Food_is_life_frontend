import React from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuLink title="Add Food Item" icon={"Add Food"} />
      <MenuLink title="Add Leftovers " icon={"Add Lefover"} />
      <MenuLink title="Delete Food Item" icon={"Delete Food"} />
      <MenuLink title="Display Food Item" icon={"Display Food "} />
      <MenuLink title="Update Food Item" icon={"Update Food"} />
      <MenuLink title="Order Details" icon={"Update Food"} />
    </Container>
  );
};

export default Menu;
