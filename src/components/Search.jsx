import React from "react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/actions";
import { useSelector } from "react-redux";
import Tile from "./Tile";

export default function Search() {
  const loading = useSelector((state) => state.delta.loading);
  const AniArray = useSelector((state) => state.delta.data);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {});

  const handleClick = () => {
    dispatch(fetchData(input));
  };
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      handleClick();
      console.log("Success");
    }
  };
  return (
    <div>
      <input id="search-btn" type="checkbox" />
      <label for="search-btn"></label>

      <input
        type="text"
        id="search-bar"
        value={input}
        onChange={(i) => setInput(i.target.value)}
        onKeyDown={handleEnter}
        placeholder="search..."
      />
      <div className="tile">
        {!loading && AniArray.map((x, i) => <Tile data={x} key={i} />)}
      </div>
    </div>
  );
}
