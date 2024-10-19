import { useProductsContext } from "../../context/ProductsProvider"


export const CartItem = ({product}) => {

    const callback = useProductsContext().removeItem;

    const remove = (id) => callback(id);

    return (
        <>

        {/* Cart item row */}
        <div className="flex justify-between pd-3 items-center">

            {/* Item details */}
            <div className="flex flex-col">
                <h4>{product.name}</h4>
                <div className="flex gap-2">
                    <p className="text-red-500 text-semi-bold">${product.quantity}</p>
                    <p className="font-thin">{product.price}</p>

                </div>
            </div>

            {/* Close icon */}
            <div className="flex items-center justify-middle rounded-full border-gray-400 border-2 p-1 cursor-pointer" onClick={() => remove(product.id)} >
                <img src="src/assets/images/icon-remove-item.svg" alt="" className="" />
            </div> 
        </div>
        <hr />
        </>
    )
}