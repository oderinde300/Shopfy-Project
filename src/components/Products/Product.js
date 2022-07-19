import { Link } from 'react-router-dom';
import classes from './Product.module.css';


const Product = (props) => {

    return (
        <Link to={`/products/allProducts/${props.id}`}>
            <section className={classes['product-container']}>
                <section className={classes.product}>
                    <div className={classes['product-img']}>
                        <img src={props.image} />
                    </div>
                    <div className={classes['product-msg']}>
                        <p>{props.name}</p>
                        <p>{`$${props.price}`}</p>
                    </div>
                </section>
            </section>
        </Link>
    );
};

export default Product;