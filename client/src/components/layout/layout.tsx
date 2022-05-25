import React from 'react';
import { Header } from '../header/header';
import { Product } from '../product/product';
import './layout.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from '../results/results';

export const Layout = () => {

  return (
    <Router>
    <div className="layout">
      <Header />
        <div className="layout__wrapper">
          <Routes>
            <Route path={'/items'} element={<Results />}></Route>
            <Route path={'/items/:id'} element={<Product />}></Route>
          </Routes>
        </div>
    </div>
    </Router>
  )
}

