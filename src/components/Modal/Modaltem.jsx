export const ModalItem = ({ id, image, name, quantity, price, subtotal }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex gap-6">
        <img
          src={image.thumbnail}
          alt={`Picture of ${name}`}
          className="h-12 w-12"
        />
        <div className="flex flex-col">
          <h4>{name}</h4>
          <div className="flex flex-row gap-3">
            <p className="text-red">{quantity}x</p>
            <p>@ £{price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <h4>£{subtotal.toFixed(2)}</h4>
    </div>
  );
};
