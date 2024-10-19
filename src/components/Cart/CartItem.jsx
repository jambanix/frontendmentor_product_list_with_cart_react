

export const CartItem = ({product}) => {

    return (
        <>
        <div className="flex justify-between pd-3 items-center">
            <div className="flex flex-col">
                <h4>{product.name}</h4>
                <div className="flex gap-2">
                    <p className="text-red-500 text-semi-bold">${product.quantity}</p>
                    <p className="font-thin">{product.price}</p>

                </div>
            </div>
            <div className="border-2 rounded-full flex justify-center items-center p-1">
                <img src="src/assets/images/icon-remove-item.svg" alt="" className="" />
            </div>
        </div>
        </>
    )
}