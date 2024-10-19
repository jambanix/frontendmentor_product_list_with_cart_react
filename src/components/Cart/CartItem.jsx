import { useProductsContext } from "../../context/ProductsProvider"


export const CartItem = ({product}) => {

    const productsContext = useProductsContext();

    const removeFromCart = () => productsContext.removeFromCart(product.id);
    const itemSubtotal = () => productsContext.getItemSubtotal(product.id);

    return (
        <>

        {/* Cart item row */}
        <div className="flex justify-between p-2 items-center">

            {/* Item details */}
            <div className="flex flex-col">
                <h4>{product.name}</h4>
                <div className="flex gap-2">
                    <p className="text-red-500 text-semi-bold">{product.quantity}x</p>
                    <p className="font-thin">@£{product.price}</p>
                    <p className="">£{itemSubtotal()}</p>
                </div>
            </div>

            {/* Remove icon */}
            <div className="flex items-center justify-middle rounded-full border-gray-400 border-2 p-1 cursor-pointer" onClick={removeFromCart} >
                <img src="src/assets/images/icon-remove-item.svg" alt="" className="" />
            </div> 
        </div>
        <hr />
        </>
    )
}