import './Product.css'
import React from "react";

class Product extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      onClick: props.onClick, 
      price: props.price,
      inStock: props.inStock,
      name: props.name,
      id: props.id
    };
  }

  render() {
    return (
    <div className="Product"> 
       <div className="">
          <h3 className="Product-header">{this.state.name}</h3>
          <p className="Product-main">
            Price: {this.state.price} <br/>
            In stock: {this.state.inStock}
          </p>
          <button className="Product-button" onClick={() => this.state.onClick(this.state)}>Buy</button>
      </div>
    </div>
    );
  }
}

export default Product;
