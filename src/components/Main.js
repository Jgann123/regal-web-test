import React from "react";
import Header from "./Header";
import styled from "styled-components";
import IndexPage from "./IndexPage";

function Main() {
  return (
    <container fluid>
      <Header />
      <HR>
        <hr></hr>
      </HR>
      <IndexPage />
    </container>
  );
}

export default Main;

const HR = styled.div`
  height: 40px;
  background-color: #f56600;
  .hr {
    height: 10px;
    color: #ff6500;
    overflow-x: scroll;
  }
  color: orange;
`;
