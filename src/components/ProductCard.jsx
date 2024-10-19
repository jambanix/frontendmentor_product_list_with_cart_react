import { useState } from "react"
import { ProductButton } from "./ProductButton"
import { useProductsContext } from "../context/ProductsProvider"

export const ProductCard = ({product}) => {
    
    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="relative">
                    <img
                        src={product.image.mobile}
                        alt={`Picture of ${product.name}`}
                        className="rounded-lg"/>
                    <ProductButton id={product.id} quantity={product.quantity}/>
                </div>
                <div>
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                    <h3 className="text-red-500 font-semibold">${product.price}</h3>
                </div>
            </div>
        </>
    )
}