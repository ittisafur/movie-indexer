import { Link } from "react-router-dom";

/**
 * Movies.
 * @param {Object} props.movie - Movie card information.
 * @param {Object} props.genres - Genre infomation rendering.
 * @returns {JSX.Element}
 */
function Movies({ movie, genres }) {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <div key={movie.id}>
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
          <div className="font-pop text-sm">
            <h2 className="font-bold mt-5 mb-2">{movie.original_title}</h2>
            <div className="flex justify-between text-dark-150 ">
              <p className="tracking-wide w-8/12">
                {genres(movie.genre_ids).map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
              <p> {movie.vote_average}/10</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movies;
