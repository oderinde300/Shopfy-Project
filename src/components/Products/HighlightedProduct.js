import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';


import classes from './HighlightedProduct.module.css'

const HighlightedProduct = (props) => {
    const [productQuantity, setProductQuantity] = useState(1);

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items)

    const { image, id, price, name } = props;

    const onAdd = () => {
        setProductQuantity(prevState => prevState + 1);
    }

    const onReduce = () => {
        if (productQuantity <= 1) {
            return;
        };
        setProductQuantity(prevState => prevState - 1);
    }

    const addItemToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            name: name,
            id: id,
            image: image,
            price: price,
            quantity: productQuantity,
        })
        );
        setTimeout(() => {
            dispatch(uiActions.showNotification({
                status: '',
                title: '',
                message: '',
            }));
        }, 5000);
        dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Successful',
            message: 'Item Successfully Added to cart',
        }));
    };

    return (
        <section className={classes['highlighted-product']}>
            <div className={classes['highlighted-product-display']}>
                <h1>{props.category}</h1>
                <div className={classes['highlighted-product-img-container']}>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
            <div className={classes['highlighted-product-text']}>
                <div className={classes['highlighted-product-msg']}>
                    <h1 className={classes['highlighted-product-name']}>{props.name}</h1>
                    <p className={classes['highlighted-product-description']}>{props.description}</p>
                </div>
                <div>
                    <h1>Price: {`$${props.price}`} </h1>
                    <div className={classes.actions}>
                        <button onClick={onReduce}>−</button>
                        <span className={classes.quantity}> {productQuantity}</span>
                        <button onClick={onAdd}>+</button>
                    </div>
                    <button onClick={addItemToCartHandler} className={classes['add-cart-btn']}>
                        ADD TO CART
                    </button>
                </div>
            </div>

        </section>
    );
};

export default HighlightedProduct;