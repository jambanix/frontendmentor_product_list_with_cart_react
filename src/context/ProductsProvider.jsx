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

    // Inserts product into array to keep the ordering
    const insert = (product) => {
        const index = products.indexOf(product);
        const newProducts = products.filter(item => item.id !== product.id);
        newProducts.splice(index, 0, product);
        return newProducts;
    }

    // Return array of products where quantity > 0
    const getCartItems = () => products.filter(item => item.quantity > 0);

    // Return the subtotal of an item based on ID
    const getItemSubtotal = (id) => {
        const [product] = [...products.filter(item => item.id === id)];
        return product.quantity * product.price;
    }

    // Return the total of all items in the cart
    const getCartTotal = () => {
        return products.filter(product => product.quantity > 0).reduce((total, product) => (product.price * product.quantity) + total, 0);
    }

    // Reset cart
    const reset = () => {
        const cartItems = getCartItems();
        cartItems.forEach(item => removeFromCart(item.id));
    }
    

    const alterQuantity = (id, value) => {
        const [product] = [...products.filter(item => item.id === id)];
        product.quantity += value;
        setProducts((products) => insert(product));
    }

    const removeFromCart = (id) => {
        const [product] = [...products.filter(item => item.id === id)];
        product.quantity = 0;
        setProducts((products) => insert(product));
    }

 
    return (
        <Products.Provider value={
            {
                products,
                alterQuantity,
                getCartItems,
                removeFromCart,
                getItemSubtotal,
                getCartTotal,
                reset
            }}>
            {children}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

