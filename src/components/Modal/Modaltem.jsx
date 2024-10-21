import { useProductsContext } from "../../context/ProductsProvider"

export const ModalItem = ({id, image, name, quantity, price, subtotal}) => {


    return (
        <div className="flex justify-between items-center p-2">
            <div className="flex gap-6">
                <img src={image.thumbnail} alt={`Picture of ${name}`} className="h-12 w-12"/>
                <div className="flex flex-col">
                    <h4>{name}</h4>
                    <div className="flex flex-row">
                        <p className="text-red">{quantity}x</p>
                        <p>@ £{price}</p>
                    </div>
                </div>
            </div>
            <h4>£{subtotal}</h4>
        </div>
    )
}