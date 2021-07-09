import React from "react";
import { Button } from "antd";

export const Favorite = (props) => {
  let variables = {
    movieId: "props.movieId",
    userFrom: "userForm",
  };
  return (
    <div>
      <Button>Favorite</Button>
    </div>
  );
};
