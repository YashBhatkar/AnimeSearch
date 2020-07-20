import React from "react";
import { useEffect, useState } from "react";
const Tile = (props) => {
  const {
    image_url,

    mal_id,
    url,
    title,
    airing,
    synopsis,
    type,
    episodes,
    score,
    start_date,
    end_date,
    members,
    rated,
  } = props.data;
  useEffect(() => {
    console.log(synopsis);
  });

  return (
    <div className="tile-root">
      <img src={image_url} alt="img" />
      <div className="synopsis">
        <h5>{synopsis}</h5>
      </div>
    </div>
  );
};

export default Tile;
