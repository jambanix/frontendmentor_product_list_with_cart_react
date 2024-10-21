export const ModalHeading = () => {
  return (
    <>
      <img
        src="/assets/images/icon-order-confirmed.svg"
        alt="confirm order icon"
        className="h-12 w-12"
      />
      <div>
        <h2 className="text-3xl font-bold">Order confirmed</h2>
        <p className="text-rose-400">We hope you enjoy your food!</p>
      </div>
    </>
  );
};