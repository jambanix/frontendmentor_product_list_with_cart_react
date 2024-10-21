import { useProductsContext } from "../../context/ProductsProvider";
import { DeleteIcon } from "../Icons/DeleteIcon";

export const CartItem = ({
  id,
  name,
  quantity,
  price,
  subtotal,
}) => {
  const { remove } = useProductsContext();

  return (
    <>
      {/* Cart item row */}
      <div className="flex justify-between p-2 items-center">
        {/* Item details */}
        <div className="flex flex-col">
          <h4>{name}</h4>
          <div className="flex gap-2">
            <p className="text-red text-semi-bold">{quantity}x</p>
            <p className="font-thin text-rose-400">@£{price.toFixed(2)}</p>
            <p className="text-rose-500">£{subtotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Remove icon */}
        <DeleteIcon remove={remove} id={id}/>
      </div>
      <hr />
    </>
  );
};
