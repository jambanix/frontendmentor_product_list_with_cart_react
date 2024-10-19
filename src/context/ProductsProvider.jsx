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


    const getCartItems = () => products.filter(item => item.quantity > 0);
    

    const setQuantity = (id, value) => {
        const [product] = [...products.filter(item => item.id === id)];
        product.quantity += value;
        setProducts((products) => [...products.filter(item => item.id !== id), product]);
    }

    const removeFromCart = (id) => {
        const [product] = [...products.filter(item => item.id === id)];
        product.quantity = 0;
        setProducts((products) => [...products.filter(item => item.id !== id), product]);
    }

 
    return (
        <Products.Provider value={
            {
                products: products,
                quantityCallback: setQuantity,
                cartItems: getCartItems,
                removeItem: removeFromCart
            }}>
            {children}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

