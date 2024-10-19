import { createContext, useContext, useEffect, useState } from "react";


const Products = createContext([]);

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            setProducts(data.map((item, ix) => {
                item.quantity = 0;
                item.id = ix + 1;
            }));
        })
    }, [])

    return (
        <Products.Provider>
            {children}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

