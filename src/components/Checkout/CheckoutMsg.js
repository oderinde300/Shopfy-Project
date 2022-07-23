import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { checkoutActions } from '../../store/checkout-slice';
import Modal from '../UI/Modal';

import classes from './CheckoutMsg.module.css';

const CheckoutMsg = () => {
    const dispatch = useDispatch();

    const onDone = () => {
        dispatch(cartActions.clearCart())
        dispatch(checkoutActions.hideCheckoutHandler())
    };

    return (
        <Modal>
            <section className={classes['checkout-msg']}>
                <h1>Your Order has been received</h1>
                <div className={classes['checkout-msg-icon']}>
                    <i className="fa-solid fa-circle-check"></i></div>
                <h3>Thank you for your purchase</h3>
                <p>Your order ID is: {Math.random()} </p>
                <p>You will receive an order confirmation email with the details of your order</p>
                <button onClick={onDone}>Done</button>
            </section>
        </Modal>
    );
};

export default CheckoutMsg;