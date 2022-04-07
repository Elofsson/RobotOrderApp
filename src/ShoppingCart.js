import './ShoppingCart.css'
import { React } from "react";
import { useNavigate  } from 'react-router-dom';

const ShoppingCart = ({products}) => {

  let navigate = useNavigate();

  const viewShoppingCart = () => {
    navigate("/shoppingcartpreview");
  }

  return (
    <div className="Shopping-cart">
      <button className="Shopping-cart-button" onClick={viewShoppingCart}>
        Price {totalCost(products)} Kr <br/>
        Products {products.length}
      </button>
    </div>
  );
}

export function totalCost(products) {
  console.log(products);
  let totalCost = 0;
  for(var i = 0; i < products.length; i++) {
    totalCost += products[i].price;
  }
  return totalCost;
}

export default ShoppingCart;