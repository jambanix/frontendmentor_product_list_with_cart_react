import { useModalContext } from "../../context/ModalProvider"
import { useProductsContext } from "../../context/ProductsProvider";



export const ConfirmButton = ({children}) => {

    const modalContext = useModalContext();
    const productContext = useProductsContext();
    const cartEmpty = productContext.getCartItems().length === 0;

    return (
        <button
            className="w-full bg-red text-white p-4 rounded-lg"
            onClick={!cartEmpty && modalContext.toggleModal}>
                {children}
        </button>
    )
}