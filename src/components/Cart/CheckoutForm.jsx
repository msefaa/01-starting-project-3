import { useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

const Checkout = (props) => {
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    street: true,
    postCode: true,
    city: true,
  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postCodeInput = useRef();
  const cityInput = useRef();
  const isEmpty = (value) => value.trim() === "";
  const isFiveCaracter = (value) => value.trim().length !== 5;
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPostCode = postCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameValidity = !isEmpty(enteredName);
    const enteredStreetValidity = !isEmpty(enteredStreet);
    const enteredPostCodeValidity = !isFiveCaracter(enteredPostCode);
    const enteredCityValidity = !isEmpty(enteredCity);
    setIsFormValid({
      name: enteredNameValidity,
      street: enteredStreetValidity,
      postCode: enteredPostCodeValidity,
      city: enteredCityValidity,
    });
    const formValidity =
      enteredNameValidity &&
      enteredStreetValidity &&
      enteredPostCodeValidity &&
      enteredCityValidity;
    if (formValidity) {
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postCode: enteredPostCode,
        city: enteredCity,
      });
    } else {
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          isFormValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!isFormValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          isFormValid.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!isFormValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          isFormValid.postCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postCodeInput} />
        {!isFormValid.postCode && (
          <p>Please enter a valid Postal Code!(It should be 5 caracters)</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          isFormValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!isFormValid.city && <p>Please enter a valid city !</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
