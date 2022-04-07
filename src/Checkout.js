import './Checkout.css';
import {React, useState} from "react";
import { TextField, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import creditcard from "./res/credit-card.png";

const Checkout = ({selectedProducts}) => {

  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit, formState: {errors}} = useForm();

  //Error message to be displayed.
  const baseErrorMsg = "*This field is required";

  
  /*Submit data to API here, depending on the api the information will
    be formatted differently and what kind of data that is required may
    be different dependibg on API aswell. Currently all data is sent,
    however in reality that may not be neccessary.
  */
  const onSubmit = (event) => {

    //Construct user object with data from form.
    const userData = {
      firstName: removeSpecialChars(event.firstName),
      lastName: removeSpecialChars(event.lastName),
      address: removeSpecialChars(event.address),
      postalCode: removeSpecialChars(event.postalCode),
      city: removeSpecialChars(event.city),
      county: removeSpecialChars(event.county),
      country: removeSpecialChars(event.country),
      cardNumber: removeSpecialChars(event.cardNumber),
      validThru: removeSpecialChars(event.validThru),
      cvc: removeSpecialChars(event.validThru),
    }

    //Append the products user have selected.
    const dataToApi = {
      products: selectedProducts,
      user: userData
    };

    //Perform a API call.
    sendDataToApi(dataToApi);

    //Set redirection.
    setRedirect(true);
  }

  //Redirect if a valid submition was done.
  if(redirect) {
    return (
      <Navigate to="/confirmation"></Navigate>
    );
  }
  
  return (
    <form autoComplete="off" className="Checkout" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={13} sm={6}>
          <TextField {...register("firstName", {required: true, pattern: /^[A-Za-z]+$/i})} label="First Name" variant="outlined" fullWidth />
          {errors.firstName && <span>{baseErrorMsg}. No special characters</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("lastName", {required: true, pattern: /^[A-Za-z]+$/i })} label="Last Name" variant="outlined" fullWidth/>
          {errors.lastName && <span>{baseErrorMsg}. No special characters</span>}
        </Grid>
        <Grid item xs={12}>             
          <TextField {...register("address", {required: true})} label="Address" variant="outlined" fullWidth />
          {errors.address && <span>{baseErrorMsg}. Alphabet and numbers</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("postalCode", {required: true, pattern: /^[0-9]*$/, minLength: 5})} label="Postal code" variant="outlined" fullWidth />
          {errors.postalCode && <span>{baseErrorMsg}. Only numbers. Minium 5 characters</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("city", {required: true, pattern: /^[A-Za-z]+$/})} label="City" variant="outlined" fullWidth />
          {errors.city && <span>{baseErrorMsg}.</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("county", {required: true})} label="County" variant="outlined" fullWidth />
          {errors.county && <span>{baseErrorMsg}.</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("country", {required: true})} label="Country" variant="outlined" fullWidth />
          {errors.country && <span>{baseErrorMsg}.</span>}
        </Grid>
        <img src={creditcard} alt="Card" className="Checkout-card"></img>
        <Grid item xs={12}>
          <TextField {...register("cardNumber", {required: true, pattern: /^[0-9]*$/})} label="Card Number" variant="outlined" fullWidth />
          {errors.cardNumber && <span>{baseErrorMsg}. 16 Numbers</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("validThru", {required: true, pattern: /^[0-9]*$/, minLength: 4, maxLength: 4})} label="Valid Thru" variant="outlined" fullWidth />
          {errors.validThru && <span>{baseErrorMsg}. 4 Numbers</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("cvc", {required: true, pattern: /^[0-9]*$/, minLength: 3, maxLength: 3})} label="CVC" variant="outlined" fullWidth />
          {errors.cvc && <span>{baseErrorMsg}. 3 Numbers</span>}
        </Grid>
      </Grid>
      <button className="Checkout-button" type="submit">Continue</button>
    </form>
  );
}

function removeSpecialChars(str) {
  //Remove rest of special characters.
  return str.replace(/[^a-zA-Z ]/g, "");
}

function sendDataToApi(apiData) {
  console.log("Sending data to API ");
}

export default Checkout;