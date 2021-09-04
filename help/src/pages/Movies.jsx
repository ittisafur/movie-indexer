import React, { Component } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

class Movies extends Component {
  state = {
    movies: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { data } = await axios.get("movie/popular");

    this.setState({ movies: data.results });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    return (
      <div className="grid grid-cols-5 gap-10">
        {this.state.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
