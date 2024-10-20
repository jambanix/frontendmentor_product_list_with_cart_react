import { useProductsContext } from "../../context/ProductsProvider";
import { ModalItem } from "./Modaltem";
import { useModalContext } from "../../context/ModalProvider";

export const ConfirmationModal = () => {

    const context = useProductsContext();
    const cartItems = context.getCartItems();
    const cartTotal = context.getCartTotal();
    const modalContext = useModalContext();
    const hide = () => modalContext.toggleModal(false);

    const startNew = () => {
        hide();
        context.reset();
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
                <img
                    src="src/assets/images/icon-order-confirmed.svg"
                    alt="confirm order icon"
                    className="h-12 w-12" />
                <div>
                    <h2 className="text-3xl font-bold">Order confirmed</h2>
                    <p>We hope you enjoy your food</p>
                </div>
                <div className="bg-rose-100 rounded-lg p-4">
                    {cartItems.map(item => <ModalItem product={item}/>)}
                    <div className="flex justify-between">
                        <h4>Order Total</h4>
                        <h2>£{cartTotal}</h2>
                    </div>
                </div>
                <button
                className="rounded-full bg-red text-white h-12" onClick={startNew}>
                    Start New Order
                </button>
            </div>
        </section>
    )
}