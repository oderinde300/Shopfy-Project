import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { authActions } from '../../store/auth-slice';
import { motion } from 'framer-motion'

import HeaderForm from './HeaderForm';
import classes from './Header.module.css'

const Header = () => {
    const items = useSelector(state => state.cart.items);
    const [btnIshighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes['header-cart']} ${btnIshighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);


    const cartItemsQuantity = useSelector(state => state.cart.totalProducts);
    const loggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const logoutHamdler = () => {
        dispatch(authActions.logoutHandler())
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(225, 225, 225)',
            transition: {
                duration: 0.3,
                yoyo: Infinity
            }
        }
    }

    return (
        <nav className={classes.header}>
            <NavLink to='/'>
                <motion.h1 className={classes.logo}
                    variants={buttonVariants}
                    whileHover='hover'
                >Shopfy</motion.h1>
            </NavLink>
            <ul>
                <li>
                    <HeaderForm />
                </li>
                <NavLink to='/auth'>
                    {!loggedIn &&
                        <li>
                            <button>
                                Login
                            </button>
                        </li>}
                </NavLink>
                {loggedIn &&
                    <li>
                        <button onClick={logoutHamdler}>
                            Logout
                        </button>
                    </li>}
                <NavLink to='/products/allProducts'>
                    <li>Products</li>
                </NavLink>
                <NavLink to='/cart' exact>
                    <li>
                        <div className={btnClasses}>
                            <p>cart</p>
                            <div className={classes['header-cart-icon']}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>{cartItemsQuantity}</span>
                            </div>

                        </div>
                    </li>
                </NavLink>
            </ul>
        </nav >
    );
};

export default Header;