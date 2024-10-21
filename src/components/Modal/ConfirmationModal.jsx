import { useProductsContext } from "../../context/ProductsProvider";
import { useModalContext } from "../../context/ModalProvider";
import { ModalHeading } from "./ModalHeading";
import { ModalBody } from "./ModalBody";

export const ConfirmationModal = () => {

    const {cartItems, cartTotal, reset} = useProductsContext();

    const modalContext = useModalContext();
    const hide = () => modalContext.toggleModal(false);

    const handleStartNew = () => {
        hide();
        reset();
    }

    return (
        <section
            className={`
                fixed inset-0 flex justify-center 
                items-center transition-colors z-20
                ${modalContext.showModal ? "visible bg-black/80" : "invisible"}`}

            onClick={hide}>
            <div
                className={`
                    rounded-lg w-1/2 bg-white text-black
                    flex flex-col gap-6 transition-all
                    p-8
                    ${modalContext.showModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
                    
                onClick={(e) => e.stopPropagation()}>
                <ModalHeading/>
                <ModalBody items={cartItems()} total={cartTotal()}/>
                <button
                className="rounded-full bg-red text-white h-12" onClick={handleStartNew}>
                    Start New Order
                </button>
            </div>
        </section>
    )
}