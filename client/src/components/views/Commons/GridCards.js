import React from "react";
import { Col } from "antd";

export const GridCards = (props) => {
  if (props.landingPage) {
    return (
      <Col lg={4} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: "100%", borderRadius: "2rem" }}
              src={props.image}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      <Col lg={4} md={8} xs={24}>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%", borderRadius: "2rem" }}
            src={props.image}
            alt={props.name}
          />
          <p
            style={{
              position: "absolute",
              bottom: " 0.1rem",
              margin: "0.7rem",
              color: "white",
              fontSize: "1rem",
            }}
          >
            {props.name}
          </p>
        </div>
      </Col>
    );
  }
};
