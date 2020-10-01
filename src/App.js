import React from "react";
import i18n from './i18n';

import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";

import "./App.scss";

function App() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <header>
        <div className="logo-lang">
          <div className="logo">COREX</div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ru')}>RU</button>
        </div>
        <Cart />
      </header>
      <Products />
    </div>
  );
}

export default App;
