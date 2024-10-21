

export const QuantityIcon = ({onClick, increment=true}) => {

    return (
        <div
        className="border-white rounded-full p-1 h-6 w-6 border-2 flex items-center justify-center hover:bg-white"
        onClick={onClick}>
            <img src={`src/assets/images/icon-${increment ? "increment" : "decrement"}-quantity.svg`}
            alt={`${increment ? "increment" : "decrement"} icon`}
            className="h-3 w-4 hover:fill-red" />
        </div>
    )
}