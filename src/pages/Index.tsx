import { useState, useEffect } from "react";
import axios from "axios";
import { VisibilityObserver } from "reactjs-visibility";

// Components
import Movie from "../components/Movie";

function Index() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("movie/popular")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));

    axios.get("genre/movie/list").then((res) => setGenre(res.data.genres));
  }, []);

  const handlePaginate = (visible) => {
    if (!visible) return;

    setLoading(true);
    setPage(page + 1);

    axios
      .get(`movie/popular?page=${page}`)
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getGenres = (ids: string[]) => {
    return genre.filter((genre) => ids.includes(genre.id));
  };

  return (
    <div>
      <h1 className="my-5 text-2xl text-white font-mont font-semibold ">
        Popular Now
      </h1>
      <div className="grid md:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-1 grid-cols-1">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} genres={getGenres} />
        ))}
      </div>
      <div className="my-8 text-center"></div>
    </div>
  );
}

export default Index;
