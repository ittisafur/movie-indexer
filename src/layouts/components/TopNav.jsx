import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get(`search/movie?query=${searchTerm}`)
      .then((res) => setSearch(res.data.results));
  }, [searchTerm]);
  const handleSearch = (e) => {
    if (!searchTerm) setSearch([]);
    setSearchTerm(e.target.value);
  };
  return (
    <div className="w-full h-12 items-center grid md:grid-cols-2 grid-cols-1 mt-2">
      <div>
        <input
          className="md:px-5 md:py-1 lg:px-5 lg:py-1 px-1 py-1 font-pop text-dark-250 
          rounded-full border border-transparent focus:outline-none focus:ring-2 
          focus:border-transparent focus:text-dark-250 w-full md:w-8/12 lg:w-8/12"
          type="text"
          placeholder="Search Here"
          onKeyDown={handleSearch}
        />
        {search.length > 1 ? (
          <ul className="z-30 absolute w-6/12 text-light-250 space-y-3 backdrop-filter backdrop-blur-md bg-opacity-50 bg-dark-550">
            {search
              .filter((movie) => movie.poster_path != null)
              .slice(0, 5)
              .map((res) => (
                <li key={res.id}>
                  <Link
                    to={`/movies/${res.id}`}
                    className="p-4 block flex space-x-4 items-center"
                  >
                    <img
                      className="w-14"
                      src={`https://image.tmdb.org/t/p/w92/${res.poster_path}`}
                    />
                    <div>
                      <p>{res.title}</p>
                      <p className="line-clamp-1 text-xs font-bold text-light-150">
                        {res.overview}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="flex md:justify-end lg:justify-end justify-center mt-2 md:mt-0 lg:mt-0">
        <ul>
          <li className="inline-block mr-3">
            <a>IMDBPro</a>
          </li>
          <li className="inline-block">
            <a>ittisafur</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
