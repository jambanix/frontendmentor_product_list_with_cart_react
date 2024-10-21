import { useScreenWidth } from "../../../hooks/useScreenWidth";

export const ProductImage = ({image, name, isActive}) => {

    const alt = `Picture of ${name}`
    const imageType = useScreenWidth();

    return (
        <img
          src={image[imageType]}
          alt={alt}
          className={`rounded-lg ${isActive ? "border-4 border-red" : null}`}/>
    )
}