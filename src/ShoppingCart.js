import React from "react";

class ShoppingCart extends React.Component {
    render() {
        return (
        <div className="shopping-list">
            <h1>{this.props.name}</h1>
            <button>Items</button>
        </div>
        );
    }
}

export default ShoppingCart;