import React, { useState } from "react";
import "./Search.css";

type SearchProps = {
  getGeo: (loc: string) => void;
};

export const Search = (props: SearchProps) => {
  const [loc, setLoc] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLoc(value);
  };

  const handleSearch = () => {
    if (!loc || loc.length === 0) {
      return;
    }
    props.getGeo(loc);
  };
  
  return (
    <div className="SearchWrapper">
      <input
        className="Search"
        type="search"
        placeholder="Search.."
        onChange={handleChange}
      ></input>
      <button className="Submit" type="submit" placeholder="City" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
