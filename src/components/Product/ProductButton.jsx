import { useState } from "react";
import { useProductsContext } from "../../context/ProductsProvider";
import { AddToCartButton } from "./AddToCartButton";
import { QuantityButton } from "./QuantityButton";

export const ProductButton = ({ product }) => {

  const [isActive, setIsActive] = useState(false);
  const productsContext = useProductsContext();

  const updateTopLevelQuantity = productsContext.alterQuantity;

  const increment = () => updateTopLevelQuantity(product.id, 1);

  const decrement = () => {
    updateTopLevelQuantity(product.id, -1);
    product.quantity === 0 ? setIsActive(false) : null;
  };

  const handleChange = (add = true) => {
    add ? increment() : product.quantity !== 0 && decrement();
  };

  const handleActive = () => {
    if (!isActive) {
      increment();
      setIsActive(true);
    }
  };

  if (isActive && product.quantity === 0) {
    setIsActive(false);
  }

  return (
    <div className="overflow-hidden transition-all">
      <AddToCartButton isActive={isActive} onClick={handleActive}>Add to Cart</AddToCartButton>
      <QuantityButton  isActive={isActive} onClick={handleChange}>{product.quantity}</QuantityButton>
    </div>
  );
};
