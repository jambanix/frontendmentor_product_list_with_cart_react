import { useProductsContext } from "../../context/ProductsProvider";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { ConfirmButton } from "./ConfirmButton";

export const Cart = () => {
  let { cartItems, cartTotal } = useProductsContext();
  cartItems = cartItems();
  cartTotal = cartTotal();
  const cartEmpty = cartItems.length === 0;

  return (
    <section className="bg-white flex flex-col rounded-xl gap-3 p-4 h-fit">
      {/* Cart heading */}
      <h3 className="font-bold text-red-500 text-2xl">
        Your cart: ({cartItems.length})
      </h3>

      {/* Render cart items if any */}
      {cartEmpty ? (
        <EmptyCart />
      ) : (
        cartItems.map((item) => <CartItem {...item} />)
      )}
      <CartSummary total={cartTotal} />
      <ConfirmButton>Confirm Order</ConfirmButton>
    </section>
  );
};