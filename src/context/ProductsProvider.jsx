import { createContext, useContext, useEffect, useState } from "react";


const Products = createContext([]);


export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const setQuantity = (id, value) => {
        const [product] = [...products.filter(item => item.id === id)];
        product.quantity += value;
        setProducts((products) => [...products, product]);
        console.log(product);
    }

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
        <Products.Provider value={{products: products, quantityCallback: setQuantity}}>
            {children}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

