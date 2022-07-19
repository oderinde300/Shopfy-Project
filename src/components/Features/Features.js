import DUMMY_DATA, { DUMMY_FEATURES } from '../../data/dataSet'
import FeaturesProduct from './FeaturesProduct'
import classes from './Features.module.css'
import { Link } from 'react-router-dom'

const Features = () => {
    const product = DUMMY_DATA.map(phone => {
        return <FeaturesProduct
            key={phone.id}
            name={phone.name}
            image={phone.image}
            price={phone.price}
            id={phone.id}
        />
    })
    return (
        <div className={classes.features}>
            <div className={classes['products-container']}>
                {product}
            </div>
            <div>
                <Link to='/products'>
                    <button>All Products</button>
                </Link>
            </div>
        </div>
    );
}

export default Features;