import { useSelector } from 'react-redux';
import classes from './CheckoutForm.module.css';


const CheckoutDetails = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalProducts = useSelector(state => state.cart.totalProducts);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <section className={classes['checkout-form-details']}>
            <h3>YOUR ORDER ({totalProducts} item(s))</h3>
            <div className={classes['checkout-price-items']}>
                {cartItems.map(item => <p key={item.id}>{item.name}
                    <span>x{item.quantity}</span>
                </p>
                )}
            </div>
            <div className={classes['checkout-price-details']}>
                <p>Subtotal</p>
                <p>{`$${totalAmount.toFixed(2)}`}</p>
            </div>
            <div className={classes['checkout-price-details']}>
                <p>Delivery fee</p>
                <p>$5.00</p>
            </div>
            <div className={classes['checkout-price-details']}>
                <p>Total Amount</p>
                <p>{`$${(totalAmount + 5).toFixed(2)}`}</p>
            </div>
        </section>
    );
};

export default CheckoutDetails;