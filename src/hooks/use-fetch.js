import { useState, useEffect } from "react";

const useFetch = (url, categoryName) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            const response = await fetch(`${url}`);

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
    }, [url])

    return ({
        products,
        isLoading,
        httpError
    })

};

export default useFetch;