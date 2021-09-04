import React, { Component } from "react";
import axios from "axios";

// Components
import Movie from "../components/Movie";

class Index extends Component {
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
    const { movies } = this.state;
    return (
      <div>
        <h1 className="my-5 text-2xl text-white font-mont font-semibold ">
          Popular Now
        </h1>
        <div className="grid md:gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 gap-1 grid-cols-1">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} genres={this.getGenres} />
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
