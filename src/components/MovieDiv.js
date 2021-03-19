import styled from "styled-components";

const MovieDiv = styled.section`
  display: flex;
  align-items: center;
  flex: 1;

  background-color: #000;
  overflow: hidden;
  width: 85%;
  margin-top: 55px;
  margin-left: 16%;
  flex-wrap: wrap;

  .movie_scroller {
    display: flex;
  }

  .movie {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 15;
    margin-right: 25px;
    margin-top: 10px;
   
  }

  .movie_poster {
    border-radius: 10px;
    box-shadow: 0 40px 0 -20 #f56600;
  }

  .movie_poster:hover {
    box-shadow: 0 40px 0 -20 #f56600;
    -moz-box-shadow: 3px 3px 5px 6px #f56600;
    -webkit-box-shadow: 3px 3px 5px 6px #f56600;
    box-shadow: 3px 3px 5px 6px #f56600;
  }

  .movie_title {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    font-weight: 600 !important;
    margin-top: 10px;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .button {
    font-size: 15px;
    font-weight: 600 !important;
    text-shadow: none;
    text-transform: uppercase;
    text-align: center;
    position: relative;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    margin-right: 42%;
    margin-left: 18%;
    margin-top: 15px;
    margin-bottom: 35px;
    align-items: center;
    border-radius: 5px;
    background-color: #f56600;
    color: #ffffff;
    width: 300px;
    cursor: pointer;
  }

  .button:hover {
    box-shadow: 0 40px 0 -20 #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;

export default MovieDiv;
