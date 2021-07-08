import React from "react";

export const ImageHeader = ({ image, title, text }) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('${image}'), #1c1c1c`,
        height: "520px",
        width: "100%",
        position: "relative",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxwidth: "500px",
            bottom: " 2rem",
            marginLeft: " 2rem",
          }}
        >
          <h2 style={{ color: "white", fontWeight: "bolder" }}>{title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};
