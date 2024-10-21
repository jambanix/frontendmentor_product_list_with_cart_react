import { ModalItem } from "./Modaltem";

export const ModalBody = ({items, total}) => {
  return (
    <div className="bg-rose-100 rounded-lg p-4">
      {items.map((item) => (
        <ModalItem {...item} />
      ))}
      <div className="flex justify-between">
        <h4>Order Total</h4>
        <h2>£{total}</h2>
      </div>
    </div>
  );
};
