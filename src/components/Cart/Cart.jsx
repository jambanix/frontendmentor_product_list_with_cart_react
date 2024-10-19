
import { useProductsContext } from "../../context/ProductsProvider";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem"
import { ConfirmButton } from "./ConfirmButton";

export const Cart = () => {

  const productsContext = useProductsContext();
  const cartItems = productsContext.cartItems();
  const cartEmpty = cartItems.length === 0;
  

  return (
    <>
        <section className="bg-white flex flex-col rounded-xl gap-3 p-4 h-fit">

            {/* Cart heading */}
            <h3 className="font-bold text-red-500 text-2xl">Your cart: ({cartItems.length})</h3>

            {/* Render cart items if any */}
            {
                cartEmpty
                ? <EmptyCart />
                : cartItems.map(item => <CartItem product={item} />)
            }

            {/*  */}
            <div className="flex flex-row items-center justify-center bg-rose-50 w-full py-6 rounded-lg">
                <img src="src/assets/images/icon-carbon-neutral.svg" alt="" />
                <p>This is a carbon-neutral delivery</p>
            </div>
            <ConfirmButton>Confirm Order</ConfirmButton>
        </section>
    </>
  )
};
