import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Index from "./pages/Index";
import TvShows from "./pages/TvShows";
import MovieDetails from "./pages/MovieDetails";
import Default from "./layouts/default";
import "./assets/style/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "ca6d58ba9bcf5c2f6cae78fa18b14045",
  language: "en-US",
};
window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Default>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/tvshows" component={TvShows} />
        </Switch>
      </Default>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
