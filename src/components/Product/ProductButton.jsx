import { useState } from "react";
import { useProductsContext } from "../../context/ProductsProvider";
import { QuantityIcon } from "./QuantityIcon";


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
    <div
    className="overflow-hidden transition-all">

      {/* Add to cart button */}
      <button
        className={`
        bg-white px-3 rounded-full w-40 h-10
        border-2 border-rose-400 flex justify-center
        items-center absolute left-1/2 -translate-x-1/2 -bottom-5
        ${isActive ? "invisible scale-125" : "visible scale-100"}`}

        onClick={handleActive}>
          <img
            src="src/assets/images/icon-add-to-cart.svg"
            className="h-4 w-5"
          />
        <p>Add to Cart</p>
      </button>

      {/* Quantity Button */}
      <button className={`bg-red transition-all text-white px-3 rounded-full w-40 h-10 border-2 border-red flex justify-between items-center absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 ${isActive ? " visible scale-100" : "invisible scale-125"}`}>
      <QuantityIcon increment={false} onClick={() => handleChange(false)}/>
      <p>{product.quantity}</p>
      <QuantityIcon onClick={isActive && handleChange}/>
      </button>
    </div>
  );
}

