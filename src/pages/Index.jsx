import React, { Component } from "react";
import axios from "axios";
import { VisibilityObserver } from "reactjs-visibility";

// Components
import Movie from "../components/Movie";

class Index extends Component {
  state = {
    movies: [],
    genres: [],
    page: 1,
    loading: false,
  };

  componentDidMount() {
    axios
      .get("movie/popular")
      .then((res) => this.setState({ movies: res.data.results }))
      .catch((err) => console.log(err));

    axios
      .get("genre/movie/list")
      .then((res) => this.setState({ genres: res.data.genres }));
  }
  handlePaginate = (visible) => {
    if (!visible) return;

    this.setState({ page: ++this.state.page, loading: true });
    axios
      .get(`movie/popular?page=${this.state.page}`)
      .then((res) => {
        const movies = [...this.state.movies, ...res.data.results];
        this.setState({ movies, loading: false });
      })
      .catch((err) => console.log(err));
  };

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
        <div className="my-8 text-center">
          <VisibilityObserver onChangeVisibility={this.handlePaginate}>
            Loading...
          </VisibilityObserver>
        </div>
      </div>
    );
  }
}

export default Index;
