import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductList from './ProductList.js';
import { useState, useEffect } from 'react';

const Products = () => {

  //Data supposed to be retrieved from a api.
  const apiCallData = 
{ "robots":[
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - This is a very long cleaning robot whose name",
    "price":2000,
    "inStock":58
  },
  {
    "id":"715c7312-a6ac-497d-be5a-752d1d2df3a0",
    "name":"Roberta - cat feeding robot",
    "price":1800,
    "inStock":32
  }]
  }

  //Convert to json array
  const jsonArrayProducts = apiCallData.robots;

  //Products in the shopping cart.
  const [products, setProducts] = useState([]);

  //Initalize our shoppingcart products by fetching them from localStorage.
  useEffect(() => {
    const selectedProducts = window.localStorage.getItem('selectedProducts') || [];  
    if(selectedProducts.length !== 0) {
      setProducts(JSON.parse(selectedProducts));
    }
    
  }, [setProducts]);

  //This is called once products are updated and will update the localStorage with new products.
  useEffect(() => {
    if(products.length > 0){
      window.localStorage.setItem('selectedProducts', JSON.stringify(products));
    }
  }, [products]);

  const callBack = (product) => {
    setProducts(products => [...products, product]);
  }

  return (
    <div className="App">
      <ShoppingCart products={products}></ShoppingCart>
      <div className="center">
        <ProductList products={jsonArrayProducts} onClick={callBack}></ProductList>
      </div>
    </div>
  );
}

export default Products;
