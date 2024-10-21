import { useProductsContext } from "../../context/ProductsProvider";
import { AddToCartButton } from "./AddToCartButton";
import { QuantityButton } from "./QuantityButton";

export const ProductButton = ({ id, quantity, isActive }) => {

  const {increment, decrement} = useProductsContext()

  const handleChange = (add = true) => {
    add ? increment(id) : quantity !== 0 && decrement(id);
  };

  const handleActive = () => {
    if (!isActive) increment(id);
  };

  return (
    <div className="overflow-hidden transition-all">
      <AddToCartButton isActive={isActive} onClick={handleActive}>Add to Cart</AddToCartButton>
      <QuantityButton  isActive={isActive} onClick={handleChange}>{quantity}</QuantityButton>
    </div>
  );
};
