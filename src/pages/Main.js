import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=tr`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    axios
      .get(API)
      // .then((res) => console.log(res))
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Main;
