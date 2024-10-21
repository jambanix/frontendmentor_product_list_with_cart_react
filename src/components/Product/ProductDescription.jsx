
export const ProductDescription = ({name, category, price}) => {
    return (
        <div>
            <p>{category}</p>
            <h3>{name}</h3>
            <h3 className="text-red font-semibold">£{price}</h3>
        </div>
    )
}