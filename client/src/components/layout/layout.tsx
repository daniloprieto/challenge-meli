import React from 'react';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { Header } from '../header/header';
import { Product } from '../product/product';
import './layout.scss';

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Breadcrumb />
        <Product />
      </div>
    </div>
  )
}
