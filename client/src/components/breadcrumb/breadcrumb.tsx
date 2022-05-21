import React from 'react'
import './breadcrumb.scss';

export const Breadcrumb = () => {
  return (
    <div className="breadcrumb__div">
      <ul className="breadcrumb__ul">
        <a href="#">Volver al listado</a>
        <a href="#">Computación</a>
        <a href="#">Accesorios para PC</a>
        <a href="#">Auriculares</a>
        <a href="#">Teclados</a>
      </ul>
    </div>
  )
}
