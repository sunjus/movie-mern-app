import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import { withRouter } from "react-router-dom";
import { Row } from "antd";
import { ImageHeader } from "./Sections/ImageHeader";
import { GridCards } from "../Commons/GridCards";

const LandingPage = (props) => {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [movieHeader, setMovieHeader] = useState(0);

  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US$page=1`;
    fetchMovies(endPoint);
  }, []);

  const fetchMovies = (endPoint) => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setMoviesPopular(res.results);
        setMovieHeader(res.results[0]);
      });
  };

  return (
    <div>
      {/*Header Image*/}
      {movieHeader && (
        <ImageHeader
          image={`${IMAGE_BASE_URL}w1280${movieHeader.backdrop_path}`}
          title={movieHeader.original_title}
          text={movieHeader.overview}
        />
      )}
      {/*Movie Grid Cards*/}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by Popular</h2>
        <hr />
        <Row gutter={[16, 16]}>
          {moviesPopular &&
            moviesPopular.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  landingPage
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                      : null
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default withRouter(LandingPage);
