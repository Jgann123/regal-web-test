import React, { useState, useEffect } from "react";
import regalData from "../Data/nowPlaying.json";
import MovieDiv from "./MovieDiv";
import Container from "react-bootstrap/Container";

function IndexPage() {
//   const [regalDate, setRegalData] = useState([]);

//   useEffect(() => {
//     let url = "/src/Data/nowPlaying.json";
//     fetch(url)
//       .then((res) => res.json())
//       .then((regalData) => setRegalData(regalData));
//   }, []);

  return (
    <MovieDiv>
      {regalData.MovieFeedEntries.map((entry, index) => {
        //   console.log(entry)

        return (
          <div className="movie" key={index}>
            {entry.Movie.Media.map((image) => {
              while (
                image.SubType === "TV_SmallPosterImage" &&
                entry.Order < 11
              ) {
                return (
                  <div>
                    <img
                      id="movie2"
                      className="movie_poster"
                      src={image.Url}
                      key={image.id}
                      alt=""
                    />
                    <div>
                      <h4 className="movie_title">{entry.Movie.Title}</h4>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
      )
      <Container className="container" fluid>
        <button className="button">Show More</button>
      </Container>
    </MovieDiv>
  );
}

export default IndexPage;
