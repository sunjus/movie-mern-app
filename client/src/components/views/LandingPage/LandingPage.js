import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import { Row } from "antd";
import { ImageHeader } from "./Sections/ImageHeader";
import { GridCards } from "../Commons/GridCards";
import { withRouter } from "react-router-dom";

function LandingPage() {
  const [MoviesPopular, setMoviesPopular] = useState([]);
  const [MovieHeader, setMovieHeader] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endPoint);
  }, []);

  const fetchMovies = (endPoint) => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        //console.log("Movies", ...MoviesPopular);
        //console.log("result", ...res.results);
        setMoviesPopular([...MoviesPopular, ...res.results]);
        setMovieHeader(MovieHeader || res.results[0]);
        setCurrentPage(res.page);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endPoint = "";
    setLoading(true);
    //console.log("CurrentPage", CurrentPage);
    endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endPoint);
  };

  return (
    <div style={{ width: "100%", margin: "0", height: "100vh" }}>
      {/*Header Image*/}
      {MovieHeader && (
        <ImageHeader
          image={`${IMAGE_BASE_URL}w1280${MovieHeader.backdrop_path}`}
          title={MovieHeader.original_title}
          text={MovieHeader.overview}
        />
      )}
      {/*Movie Grid Cards*/}
      <div style={{ width: "80%", margin: "1rem auto" }}>
        <h2>Movies by Popular</h2>
        <hr />
        <Row gutter={[16, 16]}>
          {MoviesPopular &&
            MoviesPopular.map((movie, index) => (
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

        {/*Load More button*/}
        {Loading && <div>Loading</div>}
        <br />
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button onClick={loadMoreItems}>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LandingPage);
