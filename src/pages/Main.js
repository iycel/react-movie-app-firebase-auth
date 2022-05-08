import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=true`;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = (API) => {
        axios
            .get(API)
            // .then((res) => console.log(res))
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])


    return (
        <>
            {
                movies.map(movie => (
                    <MovieCard key={movie.id} {...movie} />
                ))
            }
        </>
    )
}

export default Main;