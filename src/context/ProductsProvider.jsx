import { createContext, useContext, useEffect, useState } from "react";


const Products = createContext([]);


export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const newData = data.map((item, ix) => {
                return {
                    ...item,
                    quantity: 0,
                    id: ix + 1
                };
            });
            setProducts(newData);
        })}, []);

    return (
        <Products.Provider value={products}>
            {children}
            {console.log(products)}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

