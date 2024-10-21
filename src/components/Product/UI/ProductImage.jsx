
export const ProductImage = ({src, name}) => {

    const alt = `Picture of ${name}`
    
    return (
        <img
          src={src}
          alt={alt}
          className="rounded-lg"/>
    )
}