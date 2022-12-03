import React from "react";
import styled from "styled-components";
import NavbarDashboardRes from "../NavbarDashboardRes";
// import ProfileImage from '../../assets/images/profilelg.png'

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const MessageIcon = styled.span`
  color: ${({ theme }) => theme.colorGray};
  font-size: 27px;
  cursor: pointer;
`;
const Nav = () => {
  return (
    <div>
      <NavbarDashboardRes />
      <Container>
        <MessageIcon
          className="iconify"
          data-inline="false"
          data-icon="mdi-light:email"
        ></MessageIcon>
        <ProfileImg src={require("../../assets/images/store-s1.png")} />
      </Container>
    </div>
  );
};

export default Nav;
