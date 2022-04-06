import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
    render() {
      return (
      <div className="App-products"> 
        {this.props.products.map(product => (
          <Product id={product.id} name={product.name} price={product.price} inStock={product.inStock} onClick={this.props.onClick}></Product>
        ))}
      </div>
      );
    }
  }

export default ProductList;