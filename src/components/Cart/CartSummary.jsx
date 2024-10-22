export const CartSummary = ({ total }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <p className="text-3xl font-bold">£{total.toFixed(2)}</p>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center bg-rose-50 w-full py-6 rounded-lg">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="carbon neutral logo" />
        <p>This is a carbon-neutral delivery</p>
      </div>
    </>
  );
};
