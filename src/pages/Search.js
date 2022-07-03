import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "./SearchCard";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState([]);
  const location = useLocation();
  console.log(location);
  // geçerli URL'yi temsil eden konum nesnesini döndürür
  const searchSend = location.state;
  // const { currentUser } = useContext(AuthContext);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchSend}`;

  useEffect(() => {
    axios
      .get(SEARCH_API)
      // .then((data) => console.log(data))
      .then((res) => setSearch(res.data.results))

      .catch((err) => console.log(err));
  }, [SEARCH_API]); //* Bu url değiştikçe tekrar işlemi gerçekleştirsin

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {search.map((search) => (
        <SearchCard key={search.id} {...search} />
      ))}
    </div>
  );
};

export default Search;
