import regalData from "../Data/nowPlaying.json";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import MovieDiv from "./MovieDiv";
import "./Movies.css";
import Button from "./Button";

//import { regalData } from './Data/Data';

const Movies = () => {

  const showMore = () => {
    const imageVar = document.getElementById('movie').nodeValue;
    if(imageVar) {
      {regalData.MovieFeedEntries.map((entry, index) => {
        return( 
          <div key={index}> 
            {entry.Movie.Media.map((image => {
              if (image.SubType === "TV_SmallPosterImage" && (entry.Order > 9)) {
                return(
                  <div>
                  <img
                    id="movie"
                    className="movie_poster"
                    src={image.Url}
                    key={image.id}
                    alt=""
                  />
                  <h4 className="movie_title">{entry.Movie.Title}</h4>
                </div>
                )
              }
            }))}
          </div>
        )
      })}
    } 
  }
  return (
    <MovieDiv>
      {regalData.MovieFeedEntries.map((entry, index) => {
        //   console.log(entry)
        console.log(entry.Movie.Media.title);
        return ( 
          <div className="movie" key={index}>
            {entry.Movie.Media.map((image) => {
              if (image.SubType === "TV_SmallPosterImage" && entry.Order < 9) {
                return (
                  <div>
                    <img
                      id="movie"
                      className="movie_poster"
                      src={image.Url}
                      key={image.id}
                      alt=""
                    />
                    <h4 className="movie_title">{entry.Movie.Title}</h4>
                  </div>
                );
              }
             
            })}
          </div>
        );
      })}
      )
      <Container className="container" fluid>
        <button onClick={showMore}className="button">Show More!</button>
      </Container>
    </MovieDiv>
  );
};

export default Movies;
