import React from 'react'
import Header from './Header'
import Movies from './Movies'
import Container from "react-bootstrap/Container";
import styled from 'styled-components'
import IndexPage from './IndexPage';

function Main() {
    return (
    <container fluid>
        <Header/>
        <HR>
          <hr>
          </hr>
        </HR>
        <Movies/>      
    </container>
    )
}

export default Main

const HR = styled.div`
 height: 40px;
 background-color: #ff9900;
 .hr{
     height: 10px;
     color: #ff6500;
     overflow-x: scroll;
 }
 color: orange;
`
