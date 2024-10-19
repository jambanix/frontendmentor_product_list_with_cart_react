import { useProductsContext } from "../../context/ProductsProvider"

export const ModalItem = ({product}) => {

    const subTotal = useProductsContext().getItemSubtotal(product.id);

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-6">
                <img src={product.image.thumbnail} alt={`Picture of ${product.name}`}/>
                <div className="flex flex-col">
                    <h4>{product.name}</h4>
                    <div className="flex flex-row">
                        <p className="text-red">{product.quantity}x</p>
                        <p>@ £{product.price}</p>
                    </div>
                </div>
            </div>
            <h4>£{subTotal}</h4>
        </div>
    )
}