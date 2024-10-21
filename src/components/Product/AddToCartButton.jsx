


export const AddToCartButton = ({children, isActive, onClick}) => {
    return (
        <button
        className={`
        bg-white px-3 rounded-full w-40 h-10
        border-2 border-rose-400 flex justify-center hover:border-red hover:text-red
        items-center absolute left-1/2 -translate-x-1/2 -bottom-5
        ${isActive ? "invisible scale-0" : "visible scale-100"}`}
        onClick={onClick}
      >
        <img src="src/assets/images/icon-add-to-cart.svg" className="h-4 w-5" />
        <p>{children}</p>
      </button>
    )
}