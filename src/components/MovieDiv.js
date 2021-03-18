import * as React from "react";
import styled from 'styled-components';

import regalData from '../Data/nowPlaying.json';

const MovieDiv = styled.section`
display: flex;
align-items: center;
flex: 1;

background-color: #000;
overflow: hidden;
width: 85%;
margin-top: 35px;
margin-left: 15%;
flex-wrap: wrap;



.movie_scroller {
 display: flex;
}

.movie {
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    margin: 15;
    margin-right: 25px;
    
}

.movie_poster {
border-radius: 10px;
    
}

.movie_title {
    color: #fff;
}

.container {
    display: flex;
    justify-content: space-evenly;
}


.button {
 
  position: relative;

    display: flex;
    justify-content: space-evenly;
   margin-right: 25%;
    margin-top: 15px;
    margin-bottom: 35px;
    align-items: center;
    border-radius: 5px;
    background-color: orange;
    color: #ffffff;
    width: 300px;
    cursor: pointer;
}


`

export default MovieDiv