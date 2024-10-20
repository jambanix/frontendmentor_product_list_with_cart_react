import { useModalContext } from "../../context/ModalProvider"



export const ConfirmButton = ({children}) => {

    const modalContext = useModalContext();

    return (
        <button
            className="w-full bg-red text-white p-4 rounded-lg"
            onClick={modalContext.toggleModal}>
                {children}
        </button>
    )
}