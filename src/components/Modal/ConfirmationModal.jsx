import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { useProductsContext } from "../../context/ProductsProvider";
import { ModalBody } from "./ModalBody";


export const ConfirmationModal = forwardRef(function ConfirmationModal({}, ref) {

  const { cartItems, cartTotal, reset } = useProductsContext();
  const [showModal, setShowModal] = useState(false);

  const containerVisibility = showModal ? "visible bg-black/80" : "invisible";
  const bodyTransition = showModal ? "scale-100 opacity-100" : "scale-125 opacity-0";

  useImperativeHandle(ref, () => {
    return {
      show() {
        setShowModal(true);
      } 
    }
  })

  const handleStartNew = () => {
    setShowModal(false);
    reset();
  };

  return (

    // Modal Container
    <section
      className={`fixed inset-0 flex justify-center items-center transition-all z-20 p-4 ${containerVisibility}`} onClick={handleStartNew}>

        {/* Order confirmed banner */}
      <div
        className={`rounded-lg bg-white text-black flex flex-col gap-6 transition-all p-8 w-full md:w-3/5 lg:w-1/2 h-fit md:h-fit max-w-[800px] ${bodyTransition}`}
        onClick={(e) => e.stopPropagation()}>
        <img
          src="./assets/images/icon-order-confirmed.svg"
          alt="confirm order icon"
          className="h-12 w-12"
        />
        <div>
          <h2 className="text-3xl font-bold">Order confirmed</h2>
          <p className="text-rose-400">We hope you enjoy your food!</p>
        </div>
        
        {/* Modal body */}
        <ModalBody items={cartItems} total={cartTotal} />

        {/* Start new order button */}
        <button
          className="rounded-full bg-red text-white h-12 hover:bg-red-dark"
          onClick={handleStartNew}
        >
          Start New Order
        </button>
      </div>
    </section>
  );
});
