import React from 'react';
import './header.scss';
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
   <header className='header'>
      <nav className='nav'>
        <img src={logo} alt="logo Meli" />
        <Searcher />
      </nav>
   </header>
  )
}

const Searcher = () => {
  return (
    <form
      className="nav__search"
      action="https://www.mercadolibre.com.ar/jm/search"
      method="GET"
      role="search"
      >
      <input
        type="text"
        className="nav__search__input"
        aria-label="Ingresá lo que quieras encontrar"
        name="as_word"
        placeholder="Buscar productos, marcas y más…"
        maxLength={120}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        tabIndex={3}
        value=""
        aria-activedescendant=""
        aria-controls="cb1-list"
        aria-autocomplete="list"
        id="cb1-edit"
        aria-expanded="false"
        role="combobox" />
      <button
          type="submit"
          className="nav__search__btn"
          tabIndex={4}>
          <div
            role="img"
            aria-label="Buscar"
            className="nav__search__icon">
          </div>
        </button>
        {/* <div
          class="sb-suggestions"
          id="sb-suggestions-1"
          aria-hidden="true"
          style="top: 47px; width: 598px; position: absolute; display: none;">
          <ul
            class="sb-suggestions__list"
            role="listbox"
            id="cb1-list">
            <li
              role="option"
              id="cb1-opt1-0.7064761004120332"
              class="sb-suggestions__item  sb-suggestions__item--visited"
              data-value="auricular"
              data-position="undefined"
              data-index="undefined"
              data-type="last_search"
              data-url="">auricular
              <span class="sb-suggestions__fill"><i class="sb-suggestions__fill-icon"></i></span>
            </li>
            <li
              role="option"
              id="cb1-opt1-0.9364516915920704"
              class="sb-suggestions__item  sb-suggestions__item--visited"
              data-value="jeep renegade trailhawk"
              data-position="undefined"
              data-index="undefined"
              data-type="last_search"
              data-url="">jeep renegade trailhawk
              <span class="sb-suggestions__fill"><i class="sb-suggestions__fill-icon"></i></span>
            </li>
          </ul>
          <div class="sb-suggestions__wrapper--additional">
            <ul class="sb-suggestions__list--additional" style="display: none;"></ul>
          </div>
        </div> */}
    </form>


  )
}
