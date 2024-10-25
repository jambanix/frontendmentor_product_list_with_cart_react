import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../objects/Product";

const Products = createContext([]);

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const productsArray = data.map((product, ix) => new Product({...product, id: ix + 1}))
            setProducts(productsArray);
        })},[]);

    // Inserts product into array to keep the ordering
    const insert = (product) => {
        const index = products.indexOf(product);
        const newProducts = products.filter(item => item.id !== product.id);
        newProducts.splice(index, 0, product);
        return newProducts;
    }

    // Return array of products where quantity > 0
    const cartItems = products.filter(item => item.quantity > 0);

    // Return the subtotal of an item based on ID
    const getItemSubtotal = (id) => {
        const [product] = [...products.filter(item => item.id === id)];
        return product.subtotal;
    }

    // Return the total of all items in the cart
    const cartTotal = products.filter(product => product.quantity > 0).reduce((total, product) => product.subtotal + total, 0);
    

    // Parent function for the quantity amenders
    const alterQuantity = (id, value) => {
        let [product] = [...products.filter(item => item.id === id)];
        switch (value) {
            case 1:
                product.increment();
                break;
            case -1:
                product.decrement();
                break;
            case 0:
                product.empty();
                break;
        }
        product.update();
        setProducts((products) => insert(product));
    }

    // Quantity amenders
    const increment = (id) => alterQuantity(id, 1);
    const decrement = (id) => alterQuantity(id, -1);
    const remove = (id) => alterQuantity(id, 0);

    
    // Reset cart
    const reset = () => products.map(product => alterQuantity(product.id, 0));

 
    return (
        <Products.Provider value={
            {
                products,
                increment,
                decrement,
                remove,
                cartItems,
                getItemSubtotal,
                cartTotal,
                reset
            }}>
            {children}
        </Products.Provider>
    )
}

export const useProductsContext = () => useContext(Products);

