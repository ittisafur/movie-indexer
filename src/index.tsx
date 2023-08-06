import './assets/style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import MainPage from './pages/MainPage';
// import TvShows from "./pages/TvShows";

import MovieDetails from './pages/MovieDetails';
import CastDetails from './pages/CastDetails';
import Person from './pages/Person';
import Default from './layouts/Default';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: 'd111ba7f8f5a3f5655fa6cc02a7579c8',
  language: 'en-US',
};

// @ts-ignore
window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Default>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/:id/casts' element={<CastDetails />} />
          {/* <Route path="/tvshows" element={TvShows} /> */}
          <Route path='/person/:id/:name' element={<Person />} />
        </Routes>
      </Default>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
