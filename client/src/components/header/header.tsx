import React from 'react';
import './header.scss';
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
   <header className='header'>
      <nav className='nav'>
        <img src={ logo } alt="logo Meli" />  
      </nav>
   </header>
  )
}
