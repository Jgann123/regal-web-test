import React from "react";
import "../../public/images/logo.svg";
import logo from "./logo.svg";
import styled from "styled-components";

function Header() {
  return (
    <HedDiv>
      <img src={logo} alt=""></img>
    </HedDiv>
  );
}

export default Header;

const HedDiv = styled.div`
  width: 236px;
  height: 206px;
  overflow: hidden;
  margin-left: 8px;
  margin-top: 55px;
  margin-bottom: -105px;
  flex: -ms-wrap-flow;

  img {
    width: 100%;
  }
`;
