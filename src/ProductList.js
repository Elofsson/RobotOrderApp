import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    render() {
      return (
      <div className="App-products"> 
        {this.props.products.map(product => (
          <Product id={product} name={product.name} price={product.price} inStock={product.inStock}></Product>
        ))}
      </div>
      );
    }
  }

export default ProductList;