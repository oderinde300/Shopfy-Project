import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';
import loading from '../../assests/Rolling.svg'
import classes from './Products.module.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const response = await fetch(
                'https://e-commerce-app-7e3dd-default-rtdb.firebaseio.com/products.json'
            );

            if (!response.ok) {
                throw new Error('something went wrong')
            }
            const responseData = await response.json();

            const loadProducts = [];

            for (const key in responseData) {
                loadProducts.push({
                    id: key,
                    image: responseData[key].image,
                    category: responseData[key].category,
                    name: responseData[key].name,
                    price: responseData[key].price,
                    description: responseData[key].description
                })
            }

            setProducts(loadProducts);
        };
        fetchProducts().catch((error) => {
            setHttpError(error.message)
        });
        setIsLoading(false)
    }, [])

    const allProductsHandler = () => {
        const allProducts = products
        setProducts(allProducts);
    }

    let avialableProducts = products.map(product => {
        return <li>
            <Product
                key={product.id}
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
            <nav className={classes['produtcs-nav']}>
                <ul>
                    <Link to='/products/all'>All</Link>
                    <Link to='/products/phones'>Phones</Link>
                    <Link to='/products/computers'>Computers</Link>
                    <Link to='/products/television-sets'>Television Set</Link>
                    <Link to='/products/speakers'>Speakers</Link>
                    <Link to='/products/game-consoles'>Game Consoles</Link>
                    <Link to='/products/home-appliances'>Home Appliances</Link>
                </ul>
            </nav>
            {!isLoading && !httpError && <ul className={classes['available-products']}>
                {avialableProducts}
            </ul>}
            {isLoading && !httpError && <img src={loading} />}
            {!isLoading && httpError && <p>{httpError}</p>}
        </section>
    );
};

export default Products;