import { useProductsContext } from "../../context/ProductsProvider";
import { useRef } from "react";
import { ConfirmationModal } from "../Modal/ConfirmationModal";

export const ConfirmButton = ({ children }) => {
  const { cartItems } = useProductsContext();
  const cartEmpty = cartItems.length === 0;

  const modal = useRef();

  const handleClick = () => !cartEmpty && modal.current.show();

  return (
    <>
      <ConfirmationModal ref={modal} />
      <button
        className="w-full bg-red text-white p-4 rounded-lg hover:bg-red-dark"
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};
