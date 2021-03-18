import regalData from "../Data/nowPlaying.json";
//import React, { useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import MovieDiv from './MovieDiv';
import "./Movies.css";
import styled from 'styled-components'

//import { regalData } from './Data/Data';

const Button = () => {
  const showMore = () => {
    {regalData.MovieFeedEntries.map((entry, index) => {
        //   console.log(entry)
        console.log(entry.Movie.Media.title);
        return (
          <div className="movie" key={index}>
            {entry.Movie.Media.map((image) => {
              if (image.SubType === "TV_SmallPosterImage" && (entry.Order > "9")) {
                return (
                  <img
                    className="movie_poster"
                    src={image.Url}
                    key={image.id}
                    alt=""
                  />
                );
              }
            })}
            <h4 className="movie_title">{entry.Movie.Title}</h4>
          </div>
        );
      })}
  }
  return (
    <MovieDiv>
    <button onClick={showMore}> Show More</button>
    </MovieDiv>
  );
};
export default Button;


