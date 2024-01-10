import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";
//454f9f53=>omdb key;
const movies = {
  Title: "Spider-Man",
  Year: "2002",
  imdbID: "tt0145487",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMj…TRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
};
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=454f9f53";
const App = () => {
  const searchMivies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    searchMivies("Spider");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value=""
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movies.Year}</p>
          </div>
            <div>
              <img src={movies.Poster !== 'N/A'? movies.Poster :'https://via.placeholder.com/400'} alt={movies.Title} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;