import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import { withRouter } from "react-router-dom";
import { Row } from "antd";
import { GridCards } from "../Commons/GridCards";

const LandingPage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setMovies([...movies, ...res.results]);
      });
  }, []);

  return (
    <div style={{ width: "85%", margin: "1rem auto" }}>
      <h2>Movies by latest</h2>
      <hr />
      <Row gutter={[16, 16]}>
        {movies &&
          movies.map((movie, index) => (
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
  );
};

export default withRouter(LandingPage);
