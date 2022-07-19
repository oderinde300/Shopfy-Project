import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { name, image, quantity, price, id } = props;

    const addItemTo = () => {
        dispatch(cartActions.addItemToCart({
            name, image, quantity, price, id
        }))
    };

    const removeItem = () => {
        dispatch(cartActions.removeItemFromCart(id)
        );
    };

    const removeAllItems = () => {
        dispatch(cartActions.removeAllItemsFromCart(id)
        );
    };

    return (
        <li className={classes['cart-item']}>
            <div className={classes.summary}>
                <div className={classes['summary-display']}>
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                </div>
                <span className={classes.price}>{`${price.toFixed(2)}$`}</span>
            </div>
            <div className={classes['cart-item-actions']}>
                <div onClick={removeAllItems} className={classes['delete-btn']}>
                    <i className="fa-solid fa-trash-can"></i>
                    <span>Remove</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItem}>−</button>
                    <span className={classes.quantity}> {quantity}</span>
                    <button onClick={addItemTo}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;