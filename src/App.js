import './App.css';
import { useState } from 'react';
import { Navigate } from "react-router-dom";

const App = () => {

  //Products in the shopping cart.
  const [redirectProducts, setRedirectProducts] = useState(false);

  const onRedirectBtnClick = () => {
    setRedirectProducts(true);
  }

  if(redirectProducts) {
    return (
      <Navigate to="/products"></Navigate>
    );
  }

  return (
    <div className="App">
      <div className="center">
        <div className="App-home">
          <h1>Welcome to the robot shop!</h1>
          <button className="App-button" onClick={onRedirectBtnClick} >Browse robots</button>
        </div>
      </div>
    </div>
  );
}

export default App;
