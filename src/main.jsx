import React from "react";
import ReactDOM from "react-dom";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Default from "./layouts/default";
import "./assets/style/main.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Default>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route exact path="/tvshows" component={TvShows} />
        </Switch>
      </Default>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
