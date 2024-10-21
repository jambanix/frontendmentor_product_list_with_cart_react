import { useProductsContext } from "../../context/ProductsProvider";

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
            <p className="text-red-500 text-semi-bold">{quantity}x</p>
            <p className="font-thin">@£{price}</p>
            <p className="">£{subtotal}</p>
          </div>
        </div>

        {/* Remove icon */}
          <div
            className="flex items-center justify-middle rounded-full border-rose-300 border-2 p-1 cursor-pointer"
            onClick={() => remove(id)}
          >
            <img
              src="src/assets/images/icon-remove-item.svg"
              alt=""
              className=""
            />
          </div>
      </div>
      <hr />
    </>
  );
};
