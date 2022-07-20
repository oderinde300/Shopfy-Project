import { useState, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedProduct from "../components/Products/HighlightedProduct";
import { motion } from "framer-motion"

import loading from '../assests/Rolling.svg'

const ProductDetailsPage = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
        },
        exit: {
            x: '-100vh',
            transition: { ease: 'easeInOut' }
        }
    };

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    const params = useParams();
    const { productId } = params;

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
            const product = loadProducts.find(item => item.id === productId);
            setProducts(product);
        };
        fetchProducts().catch((error) => {
            setHttpError(error.message)
        });
        setIsLoading(false)
    }, [productId])

    return (
        <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Route path={`/products/allProducts/${productId}`}>
                {!isLoading && !httpError && (
                    <HighlightedProduct
                        image={products.image}
                        id={products.id}
                        name={products.name}
                        price={products.price}
                        description={products.description}
                        category={products.category}
                    />
                )}
                {isLoading && !httpError && <img className='product-details-loader'
                    src={loading} alt={'loading-icon'} />}
                {!isLoading && httpError && <p
                    className='product-details-error'
                >{httpError}</p>}
            </Route>
        </motion.section>
    );
};

export default ProductDetailsPage;