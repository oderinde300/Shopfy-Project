import useFetch from '../../../hooks/use-fetch';

import Product from '../Product';
import loading from '../../../assests/Rolling.svg'
import classes from '../Products.module.css'
import ProductsNavigation from '../ProductsNavigation';



const HomeAppliancesProducts = () => {
    const {
        products,
        isLoading,
        httpError
    } = useFetch('https://e-commerce-app-7e3dd-default-rtdb.firebaseio.com/products.json')

    const homeAppliances = products.filter(product => product.category === 'home-appliances')

    let availableProducts = homeAppliances.map(product => {
        return <li key={product.id}>
            <Product
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
                id={product.id}
            />
        </li>
    })


    return (
        <section className={classes.products}>
            <ProductsNavigation />
            {!isLoading && !httpError && <ul className={classes['available-products']}>
                {availableProducts}
            </ul>}
            {isLoading && !httpError && <img src={loading} alt='loading-icon' />}
            {!isLoading && httpError && <p>{httpError}</p>}
        </section>
    );
};


export default HomeAppliancesProducts;