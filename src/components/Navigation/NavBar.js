import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import HeaderForm from './HeaderForm';
import classes from './NavBar.module.css'
const NavBar = () => {
    const [click, setClick] = useState(false);
    const showCheckout = useSelector(state => state.checkout.showCheckout);

    const handleClick = () => {
        setClick(!click);
    }

    const cartItemsQuantity = useSelector(state => state.cart.totalProducts);
    const loggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logoutHandler())
        setClick(!click);
    };


    return (
        <>
            <nav className={classes.navbar}>
                <div className={classes['nav-container']}>
                    <NavLink
                        exact
                        to='/'
                        className={classes['nav-logo']}
                        onClick={handleClick}
                    >
                        Shopfy
                    </NavLink>
                </div>
                {
                    !showCheckout && (
                        <>
                            <div className={classes['header-form']}>
                                <HeaderForm />
                            </div>
                            <ul
                                className={
                                    click ? `${classes['nav-menu']} ${classes['active']}` : `${classes['nav-menu']}`}>
                                <li className={classes['nav-item']}>
                                    <NavLink
                                        exact
                                        to='/products/allProducts'
                                        activeClassName={classes.active}
                                        className={classes['nav-links']}
                                        onClick={handleClick}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                {
                                    !loggedIn && (
                                        <li className={classes['nav-item']}>
                                            <NavLink
                                                to='/auth'
                                                activeClassName={classes.active}
                                                className={classes['nav-links']}
                                                onClick={handleClick}
                                            >                            Login
                                            </NavLink>
                                        </li>
                                    )
                                }
                                {
                                    loggedIn && (
                                        <li className={classes['nav-item']}>
                                            <NavLink
                                                to='/auth'
                                                onClick={logoutHandler}
                                                activeClassName={classes.active}
                                                className={classes['nav-links']}
                                            >                            Logout
                                            </NavLink>
                                        </li>
                                    )
                                }
                                <li className={`${classes['nav-item']} ${classes['cart-nav-link']}`}>
                                    <NavLink
                                        exact
                                        to='/cart'
                                        activeClassName={classes.active}
                                        className={classes['nav-links']}
                                        onClick={handleClick}
                                    >                            Cart<span>{cartItemsQuantity}</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className={classes['nav-icons']} onClick={handleClick}>
                                {click ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                            </div>
                        </>
                    )
                }
            </nav>
        </>
    );
};

export default NavBar;