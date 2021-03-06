import React from "react";
import styled from "styled-components";
import MainHeader from "./../MainHeader/index";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHeader />
    <Aside />
    <Content>{children}</Content>
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "AS MH"
    "AS CT";
  height: 100vh;

  @media screen and (max-width: 668px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas:
      "MH"
      "CT";
  }
`;

export default Layout;
