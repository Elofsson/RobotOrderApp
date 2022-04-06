import './ShoppingCart.css'
import Checkout from './Checkout';
import React from "react";
import { Link } from 'react-router-dom';

const ShoppingCart = ({products}) => {  
  return (
    <div className="Shopping-cart">
      <Link to="/checkout">
        <button className="Shopping-cart-button">
          Price {totalCost(products)} Kr <br/>
          Products {products.length}
        </button>
      </Link>
    </div>
  );
}

function totalCost(products) {
  let totalCost = 0;
  for(var i = 0; i < products.length; i++) {
    totalCost += products[i].price;
  }
  return totalCost;
}

export default ShoppingCart;