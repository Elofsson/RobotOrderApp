import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Products from './Products';
import ShoppingCartPreview from './ShoppingCartPreview';
import Confirmation from './Confirmation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="products" element={<Products/>}></Route>
      <Route path="shoppingcartpreview" element={<ShoppingCartPreview/>}></Route>
      <Route path="checkout" element={<Checkout/>}></Route>
      <Route path="confirmation" element={<Confirmation/>}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
