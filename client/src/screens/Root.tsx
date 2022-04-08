import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './constants/paths';
import Header from '../components/Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const Root: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
