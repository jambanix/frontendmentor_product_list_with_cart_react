export const CartSummary = ({ total }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-rose-50 w-full py-6 rounded-lg">
        <img src="src/assets/images/icon-carbon-neutral.svg" alt="" />
        <p>This is a carbon-neutral delivery</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <p className="text-2xl">£{total}</p>
      </div>
    </>
  );
};
