import { Link } from "react-router-dom";
import classes from './ProductsNavigation.module.css'

const ProductsNavigation = () => {
    return (
        <nav className={classes['produtcs-nav']}>
            <ul>
                <Link to='/products/allProducts'>All</Link>
                <Link to='/products/phones'>Phones</Link>
                <Link to='/products/computers'>Computers</Link>
                <Link to='/products/television-sets'>Television Set</Link>
                <Link to='/products/speakers'>Speakers</Link>
                <Link to='/products/game-consoles'>Game Consoles</Link>
                <Link to='/products/home-appliances'>Home Appliances</Link>
            </ul>
        </nav>
    );
};

export default ProductsNavigation;