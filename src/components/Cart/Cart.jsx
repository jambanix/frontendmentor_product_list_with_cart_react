import { useState } from "react";
import { useProductsContext } from "../../context/ProductsProvider";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem"

export const Cart = () => {

  const productsContext = useProductsContext();
  const cartItems = productsContext.cartItems();
  const cartEmpty = cartItems.length === 0;
  

  return (
    <>
        <section className="bg-white flex flex-col rounded-xl gap-3 px-4 py-2">
            <h3 className="font-bold text-red-500">Your cart items: ({cartItems.length})</h3>
            {
                cartEmpty
                ? <EmptyCart />
                : cartItems.map(item => <CartItem product={item} />)
            }
        </section>
    </>
  )
};
