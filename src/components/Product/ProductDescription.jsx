
export const ProductDescription = ({name, category, price}) => {
    return (
        <div>
            <p className="text-rose-400">{category}</p>
            <h3 className="text-lg font-semibold">{name}</h3>
            <h3 className="text-red">£{price.toFixed(2)}</h3>
        </div>
    )
}