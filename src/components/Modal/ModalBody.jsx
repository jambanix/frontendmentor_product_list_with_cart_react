import { ModalItem } from "./Modaltem";

export const ModalBody = ({items, total}) => {
  return (
    <div className="bg-rose-100 rounded-lg px-4 pt-2 pb-4">
      {items.map((item) => (
        <>
        <ModalItem {...item} />
        <hr className="opacity-10"/>
        </>
      ))}
      <div className="flex justify-between pt-8 pb-2">
        <h4>Order Total</h4>
        <h2 className="text-2xl font-bold">£{total.toFixed(2)}</h2>
      </div>
    </div>
  );
};
