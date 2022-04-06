import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductList from './ProductList.js';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => {

  //Products in the shopping cart.
  //const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <h1>This is my application</h1>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
