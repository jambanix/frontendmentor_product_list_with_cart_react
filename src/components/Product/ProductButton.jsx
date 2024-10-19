import { useState } from "react";
import { useProductsContext } from "../../context/ProductsProvider";


export const ProductButton = ({ id, quantity }) => {
  const [isActive, setIsActive] = useState(false);
  const updateTopLevelQuantity = useProductsContext().quantityCallback;

  const increment = () => updateTopLevelQuantity(id, 1);

  const decrement = () => {
    updateTopLevelQuantity(id, -1);
    quantity === 1 ? setIsActive(false) : null;
  };

  const handleChange = (add = true) => {
    add ? increment() : quantity !== 0 && decrement();
  };

  const handleActive = () => {
    if (!isActive) {
      increment();
      setIsActive(true);
    }
  };

  if (isActive && quantity === 0) {
    setIsActive(false);
  }

  //  Add to cart
  if (!isActive) {
    return (
      <>
        <button
          className="bg-white px-3 rounded-xl w-40 h-12 border-2 border-gray-400 flex justify-center items-center absolute left-1/2 -translate-x-1/2 -bottom-6"
          onClick={handleActive}>
          <img
            src="src/assets/images/icon-add-to-cart.svg"
            className="h-4 w-5"
          />
          <p>Add to Cart</p>
        </button>
      </>
    );
  }

  // Change quantity
  else {
    return (
      <>
        <button className="bg-red-500 px-3 rounded-xl w-40 h-12 border-2 border-yellow-500 flex justify-between items-center absolute left-1/2 -translate-x-1/2 -bottom-6">
        <img
            src="src/assets/images/icon-decrement-quantity.svg"
            className="h-4 w-5"
            onClick={() => handleChange(false)}/>
          <p>{quantity}</p>
          <img
            src="src/assets/images/icon-increment-quantity.svg"
            className="h-4 w-5"
            onClick={handleChange}
          />
        </button>
      </>
    );
  }
};
