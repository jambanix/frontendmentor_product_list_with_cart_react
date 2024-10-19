import { useProductsContext } from "../context/ProductsProvider"


export const Menu = () => {

    const products = useProductsContext();

    return (
        <>
            {console.log(products)}
        </>
    )

}