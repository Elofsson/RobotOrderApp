import './ShoppingCartPreview.css'
import { totalCost } from './ShoppingCart'
import { React, useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';

const ShoppingCartPreview = (props) => {

  const [products, setProducts] = useState({
    totalCost: 0,
    products: [{
      name: 0,
      nr: 0,
      price: 0
    }]
  });

  let navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");

    //Store shoppingcart data.
    window.localStorage.setItem('userOrder', JSON.stringify(products));
  }

  //Initalize our shoppingcart products by fetching them from localStorage.
  useEffect(() => {
    const selectedProducts = JSON.parse((window.localStorage.getItem('selectedProducts') || []));  

    const summarizedProducts = [];
    
    for(var i = 0; i < selectedProducts.length; i++) {
      const p1 = selectedProducts[i];
      const nrProducts = selectedProducts.filter((p2) => p1.id === p2.id).length;

      const newProduct = {
        id: p1.id,
        name: p1.name,
        nr: nrProducts,
        price: p1.price * nrProducts
      }
      
      if(summarizedProducts.filter((p2) => p2.id === p1.id).length === 0) {
        summarizedProducts.push(newProduct);
      }
    }

    setProducts({
      totalCost: totalCost(selectedProducts),
      products: summarizedProducts
    });
    
  }, [setProducts]);

  return (
    <div className="Shopping-cart-container">
      <div className="Shopping-cart-preview">
        <h1>
          Order summary
        </h1>
        <div>
          {products.products.map(product => (
            <div className="Shopping-cart-preview-item-summary">
              <p>Product: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Nr: {product.nr}</p>
            </div>
          ))}
          <p>Total price: {products.totalCost}</p>
          <button className="Shopping-cart-preview-button" onClick={navigateToCheckout}>Continue to checkout</button>
        </div>
      </div>
    </div>
  );
} 

export default ShoppingCartPreview;