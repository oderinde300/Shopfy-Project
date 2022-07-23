import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalProducts = useSelector(state => state.cart.totalProducts);
    const loggedIn = useSelector(state => state.auth.isLoggedIn);


    const cart = cartItems.map(item => {
        return <CartItem
            key={item.id}
            image={item.image}
            price={item.price}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
            id={item.id}
            name={item.name}
        />
    })

    if (totalProducts === 0) {
        return (
            <section className={classes['empty-cart']}>
                <div className={classes['empty-cart-icon']}>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <h3>Your Cart is empty!</h3>
                <p>Browse our products and discover our best deals!</p>
                <Link to='/products'>
                    <button className={classes['empty-cart-btn']}>START SHOPPING</button>
                </Link>
            </section>
        );
    }

    let checkoutPath;
    if (loggedIn) {
        checkoutPath = '/checkout'
    } else {
        checkoutPath = '/auth'
    }


    return (
        <section className={classes.cart}>
            <ul className={classes['cart-items']}>
                <h3>cart({totalProducts})</h3>
                {cart}
            </ul>

            <div className={classes['cart-summary']}>
                <div>
                    <p>CART SUMMARY</p>
                </div>
                <div className={classes['cart-summary-price']}>
                    <p>Subtotal</p>
                    <p>{`$${totalAmount.toFixed(2)}`}</p>
                </div>
                <Link to={checkoutPath}>
                    <button>
                        CHECKOUT
                        <span>({`$${totalAmount.toFixed(2)}`})</span></button>
                </Link>
            </div>
        </section>
    );
};

export default Cart;