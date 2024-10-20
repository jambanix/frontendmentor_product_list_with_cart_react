import { createContext, useContext, useState } from "react";


const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const toggleModal = (show=true) => setShowModal(show);

    return (
        <ModalContext.Provider value={{toggleModal, showModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);