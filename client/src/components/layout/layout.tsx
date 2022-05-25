import React from 'react';
import { Item } from '../../models/model';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { Header } from '../header/header';
import { Product } from '../product/product';
import './layout.scss';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Results from '../results/results';

export const Layout = (props: { item: Item }) => {

  return (
    <Router>
    <div className="layout">
      <Header />
        <div className="layout__wrapper">
          <Routes>
            <Route path={'/items'} element={<Results />}></Route>
            <Route path={'/items/:id'} element={<Pdp />}></Route>
          </Routes>
        </div>
    </div>
    </Router>
  )
}

const Pdp = () => {
  return (
    <>
      <Breadcrumb />
      <Product />
    </>

  )
}

