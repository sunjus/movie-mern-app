import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import { ImageHeader } from "../LandingPage/Sections/ImageHeader";
import { MovieInfo } from "./Sections/MovieInfo";
import { GridCards } from "../Commons/GridCards";
import { Row } from "antd";

const MovieDetail = (props) => {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Crews, setCrews] = useState([]);

  useEffect(() => {
    console.log(props.match);
    let endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    fetch(endPointInfo)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);

        fetch(endPointCrew)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setCrews(res.cast);
          });
      });
  }, []);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {/*Header*/}
      <ImageHeader
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      {/*Movie Info*/}
      <div style={{ width: "80%", margin: "1rem auto" }}>
        <MovieInfo movie={Movie} />
      </div>
      {/*Crew*/}
      <div style={{ width: "80%", margin: "1rem auto" }}>
        <Row gutter={[16, 16]}>
          {Crews &&
            Crews.map((cast, index) => (
              <React.Fragment key={index}>
                <GridCards
                  image={
                    cast.profile_path
                      ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                      : null
                  }
                  cahracterName={cast.name}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default MovieDetail;
