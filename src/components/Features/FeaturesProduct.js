import { Link } from 'react-router-dom';
import classes from './FeaturesProduct.module.css';

const FeaturesProduct = (props) => {
    return (
        <section className={classes['features-product']}>
            <Link to={`./products/${props.id}`}>
                <img src={props.image} alt={props.name} />
                <div>
                    <p>{props.name}</p>
                    <p>Price: {`$${props.price}`}</p>
                </div>
            </Link>
        </section>
    );
}

export default FeaturesProduct;