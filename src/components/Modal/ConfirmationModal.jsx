import { useProductsContext } from "../../context/ProductsProvider";
import { ModalItem } from "./Modaltem";

export const ConfirmationModal = () => {

    const context = useProductsContext();
    const cartItems = context.getCartItems();
    const cartTotal = context.getCartTotal();

    return (
        <section className="h-full w-full relative bg-black z-10 flex justify-center items-center">
            <div className="rounded-lg bg-white text-black flex flex-col gap-6">
                <img src="src/assets/images/icon-order-confirmed.svg" alt="confirm order icon"></img>
                <div>
                    <h2>Order confirmed</h2>
                    <p>We hope you enjoy your food</p>
                </div>
                <div className="bg-rose-300 rounded-lg">
                    {cartItems.map(item => <ModalItem product={item}/>)}
                    <div className="flex justify-between">
                        <h4>Order Total</h4>
                        <h2>£{cartTotal}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}