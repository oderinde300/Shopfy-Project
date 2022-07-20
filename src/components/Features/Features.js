import { Link } from 'react-router-dom'

import useFetch from '../../hooks/use-fetch'
import FeaturesProduct from './FeaturesProduct'
import classes from './Features.module.css'
import loading from '../../assests/Rolling.svg'

const Features = () => {
    const {
        products,
        isLoading,
        httpError
    } = useFetch('https://e-commerce-app-7e3dd-default-rtdb.firebaseio.com/products.json')

    const product = products.map(phone => {
        return <FeaturesProduct
            key={phone.id}
            name={phone.name}
            image={phone.image}
            price={phone.price}
            id={phone.id}
        />
    })
    return (
        <>
            {!isLoading && !httpError && (
                <div className={classes.features}>
                    <div className={classes['products-container']}>
                        {product}
                    </div>
                    <div>
                        <Link to='/products/allProducts'>
                            <button>All Products</button>
                        </Link>
                    </div>
                </div>
            )}
            {isLoading && !httpError && <img src={loading} alt='loading-icon' />}
            {!isLoading && httpError && <p>{httpError}</p>}
        </>
    );
}

export default Features;