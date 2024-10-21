import { useModalContext } from "../../context/ModalProvider"
import { useProductsContext } from "../../context/ProductsProvider";



export const ConfirmButton = ({children}) => {

    const modalContext = useModalContext();
    const {cartItems} = useProductsContext();
    const cartEmpty = cartItems().length === 0;

    const handleClick = () => {
        if (!cartEmpty) modalContext.toggleModal();
    }

    return (
        <button
            className="w-full bg-red text-white p-4 rounded-lg"
            onClick={handleClick}>
                {children}
        </button>
    )
}