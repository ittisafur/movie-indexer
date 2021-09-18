import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./assets/style/main.css";

import Index from "./pages/Index";
import TvShows from "./pages/TvShows";
import MovieDetails from "./pages/MovieDetails";
import CastDetails from "./pages/CastDetails";
import Person from "./pages/Person";
import Default from "./layouts/default";

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
          <Route exact path="/:id/casts" component={CastDetails} />
          <Route exact path="/tvshows" component={TvShows} />
          <Route exact path="/person/:id/:name" component={Person} />
        </Switch>
      </Default>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
