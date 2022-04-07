import './Confirmation.css';
import checkmark from './res/checkmark.png';
import { Navigate } from "react-router-dom";
import {React, useState} from "react";

const Confirmation = () => {

  const [redirect, setRedirect] = useState(false);

  const redirectCallback = () => {
    setRedirect(true);
  }
  
  if(redirect) {
    return (
      <Navigate to="/products"></Navigate>
    )
  };

  return (
    <div className="Confirmation">
      <h1>Thank you for your purchase!</h1>
      <img src={checkmark} alt="Checkmark" className="Confirmation-image"/>
      <button className="Confirmation-button" onClick={redirectCallback}>Browse more robots</button>
    </div>
  );
}

export default Confirmation;