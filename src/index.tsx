import "./assets/style/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Index from "./pages/Index";
// import TvShows from "./pages/TvShows";
// import MovieDetails from "./pages/MovieDetails";
// import CastDetails from "./pages/CastDetails";
// import Person from "./pages/Person";
import Default from "./layouts/Default";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "ca6d58ba9bcf5c2f6cae78fa18b14045",
  language: "en-US",
};
// @ts-ignore
window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Default>
        <Routes>
          <Route path="/" element={<Index />} />
          // <Route path="/movies/:id" element={MovieDetails} />
          // <Route path="/:id/casts" element={CastDetails} />
          // <Route path="/tvshows" element={TvShows} />
          // <Route path="/person/:id/:name" element={Person} />
        </Routes>
      </Default>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
