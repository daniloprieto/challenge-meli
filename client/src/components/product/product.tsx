import React from 'react';
import './product.scss';
import product from "../../assets/images/product.jpg";

export const Product = () => {
  return (
    <div className='product'>
      <div className='panel'>
        <div className='panel__column'>
          <div className='panel__gallery'>
            <img src={ product } alt="product detail" />
          </div>
          <Data />
        </div>
        <div className='panel__column'>
          <div className='panel__gallery'>
            <img src="" alt="" />
          </div>
          <Seller />
        </div>
      </div>
    </div>
  )
}

const Data = () => {
  return (
    <div className='data'>
      <h4>Descripción</h4>
      <p>Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.</p>
    </div>
  )
}

const Seller = () => {
  return (
    <div className='seller'>
      <span>Nuevo {'>'} 32 vendidos</span>
      <h4>Auriculares inalámbricos Sony WH-CH510 negro</h4>
      <p>$1980</p>
      <button className='btn-accept'>Comprar</button>
    </div>
  )
}
