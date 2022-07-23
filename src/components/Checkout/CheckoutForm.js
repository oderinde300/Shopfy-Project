import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { cartActions } from '../../store/cart-slice';
import { checkoutActions } from '../../store/checkout-slice';
import useInput from '../../hooks/use-input';
import classes from './CheckoutForm.module.css';
import loading from '../../assests/Rolling.svg'
import CheckoutDetails from './CheckoutDetails';

const isNotEmpty = value => value.trim() !== '';
const isFiveChars = value => value.trim().length === 5;

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [httpError, setHttpError] = useState(false)

    const cartItems = useSelector(state => state.cart.items);

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameIsInvalid,
        valueInputChange: nameInputChange,
        inputBlurHandler: nameInputBlurHandler,
        reset: nameInputReset,
    } = useInput(isNotEmpty);
    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: enteredStreetIsInvalid,
        valueInputChange: streetInputChange,
        inputBlurHandler: streetInputBlurHandler,
        reset: streetInputReset,
    } = useInput(isNotEmpty);
    const {
        value: enteredPostalCode,
        isValid: enteredPostalCodeIsValid,
        hasError: enteredPostalCodeIsInvalid,
        valueInputChange: postalCodeInputChange,
        inputBlurHandler: postalCodeInputBlurHandler,
        reset: postalCodeInputReset,
    } = useInput(isFiveChars);
    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: enteredCityIsInvalid,
        valueInputChange: cityInputChange,
        inputBlurHandler: cityInputBlurHandler,
        reset: cityInputReset,
    } = useInput(isNotEmpty);

    let formIsValid = false;

    if (enteredNameIsValid
        && enteredStreetIsValid
        && enteredPostalCodeIsValid
        && enteredCityIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
            console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity)
            nameInputReset();
            streetInputReset();
            postalCodeInputReset();
            cityInputReset();

        }
        const userData = {
            name: enteredName,
            city: enteredCity,
            postalCOde: enteredPostalCode,
            street: enteredStreet,
        }
        const submitData = async () => {
            try {
                setIsSubmitting(true);
                const response = await fetch(
                    'https://e-commerce-app-7e3dd-default-rtdb.firebaseio.com/orders.json', {
                    method: 'POST',
                    body: JSON.stringify({
                        user: userData,
                        orderedProducts: cartItems,
                    })
                }
                )
                if (response.ok) {
                    history.push('/checkout/msg')
                }
            } catch (error) {
                setIsSubmitting(false);
                setHttpError(error.message);
                return;
            }
        }

        submitData();
        dispatch(checkoutActions.showCheckoutHandler());
        dispatch(cartActions.removeAllItemsFromCart());
    };

    const onCancel = () => {
        history.push('/cart')
    };

    const nameControlClasses =
        `${classes['checkout-form-input']} ${!enteredNameIsInvalid ? '' : classes.invalid}`
    const streetControlClasses =
        `${classes['checkout-form-input']} ${!enteredStreetIsInvalid ? '' : classes.invalid}`
    const postalCodeControlClasses =
        `${classes['checkout-form-input']} ${!enteredPostalCodeIsInvalid ? '' : classes.invalid}`
    const cityControlClasses =
        `${classes['checkout-form-input']} ${!enteredCityIsInvalid ? '' : classes.invalid}`

    return (
        <>
            {!isSubmitting && !httpError && (
                <section className={classes['checkout-form-main-container']}>
                    <section className={classes['checkout-form-container']}>
                        <form className={classes['checkout-form']} onSubmit={submitHandler}>
                            <div className={nameControlClasses}>
                                <label htmlFor='name'>Your Name</label>
                                <input type='name' id='name'
                                    onChange={nameInputChange}
                                    onBlur={nameInputBlurHandler}
                                    value={enteredName}
                                />
                                {enteredNameIsInvalid && <p>Please enter a valid name!</p>}
                            </div>
                            <div className={streetControlClasses}>
                                <label htmlFor='street'>Street</label>
                                <input type='address' id='street'
                                    onChange={streetInputChange}
                                    onBlur={streetInputBlurHandler}
                                    value={enteredStreet}
                                />
                                {enteredStreetIsInvalid && <p>Please enter a valid street!</p>}
                            </div>
                            <div className={postalCodeControlClasses}>
                                <label htmlFor='postal-code'>Postal Code</label>
                                <input type='name' id='postal-code'
                                    onChange={postalCodeInputChange}
                                    onBlur={postalCodeInputBlurHandler}
                                    value={enteredPostalCode} />
                                {enteredPostalCodeIsInvalid && <p>
                                    Please enter a valid postalCode (5 characters long)!
                                </p>}
                            </div>
                            <div className={cityControlClasses}>
                                <label htmlFor='city'>City</label>
                                <input type='name' id='city'
                                    onChange={cityInputChange}
                                    onBlur={cityInputBlurHandler}
                                    value={enteredCity}
                                />
                                {enteredCityIsInvalid && <p>Please enter a valid City!</p>}
                            </div>
                            <div className={classes['checkout-form-actions']}>
                                <button onClick={onCancel}>Cancel</button>
                                <button type='submit' disabled={!formIsValid}>
                                    Checkout
                                </button>
                            </div>
                        </form>
                    </section>

                    <CheckoutDetails />
                </section>
            )}
            {isSubmitting && !httpError && <div className={classes['loading-icon']}>
                <img src={loading} alt='loading icon' />
            </div>}
            {!isSubmitting && httpError && <p className={classes['error-message']}>
                {httpError}
            </p>}
        </>
    );
};

export default CheckoutForm;