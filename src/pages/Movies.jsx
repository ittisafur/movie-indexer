import React, { Component } from "react";
import axios from "axios";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ca6d58ba9bcf5c2f6cae78fa18b14045&language=en-US&page=1&include_adult=true"
      )
      .then((res) => this.setState({ movies: res.data.results }))
      .catch((err) => console.log(err));

    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ca6d58ba9bcf5c2f6cae78fa18b14045&language=en-US"
      )
      .then((res) => this.setState({ genres: res.data.genres }));
  }
  getGenres = (ids) => {
    return this.state.genres.filter((genre) => ids.includes(genre.id));
  };

  render() {
    return (
      <div>
        <h1 className="my-5 text-2xl text-white font-mont font-semibold ">
          Popular Now
        </h1>
        <div className="grid md:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-5 gap-1 grid-cols-1">
          {this.state.movies.map((movie) => (
            <div key={movie.id}>
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
              <div className="font-pop text-sm">
                <h2 className="font-bold mt-5 mb-2">{movie.original_title}</h2>
                <div className="flex justify-between text-dark-150 ">
                  <p className="tracking-wide w-8/12">
                    {this.getGenres(movie.genre_ids).map((genre) => (
                      <span key={genre.id}>{genre.name}, </span>
                    ))}
                  </p>
                  <p> {movie.vote_average}/10</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
