import { useProductsContext } from "../../context/ProductsProvider";
import { CartItem } from "./CartItem";
import { ConfirmButton } from "./ConfirmButton";

export const Cart = () => {
  const { cartItems, cartTotal } = useProductsContext();

  const cartEmpty = cartItems.length === 0;

  return (
    <section className="bg-white flex flex-col rounded-xl gap-3 p-4 h-fit">

      {/* Cart heading */}
      <h3 className="font-bold text-red-500 text-2xl">
        Your cart: ({cartItems.length})
      </h3>

      {/* Render cart items if any */}
      {cartEmpty ? (
        <div className="bg-white rounded-xl flex flex-col items-center justify-center py-20">
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="no cart items"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        cartItems.map((item) => <CartItem {...item} />)
      )}

      {/* Cart summary */}
      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <p className="text-3xl font-bold">£{cartTotal.toFixed(2)}</p>
      </div>

      {/* Carbon neutral banner */}
      <div className="flex flex-row gap-2 items-center justify-center bg-rose-50 w-full py-6 rounded-lg">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon neutral logo" />
        <p>This is a carbon-neutral delivery</p>
      </div>

      {/* Confirm button */}
      <ConfirmButton>Confirm Order</ConfirmButton>
    </section>
  );
};
