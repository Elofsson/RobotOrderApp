import './Product.css'
import React from "react";

class Product extends React.Component {
  render() {
    return (
    <div className="Product"> 
       <div className="">
          <h3 className="Product-header">{this.props.name}</h3>
          <p className="Product-main">
            Price: {this.props.price} <br/>
            In stock: {this.props.inStock}
          </p>
          <button className="Product-button">Buy</button>
      </div>
    </div>
    );
  }
}

export default Product;
