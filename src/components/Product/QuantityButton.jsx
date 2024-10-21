import { QuantityIcon } from "../Icons/QuantityIcon";

export const QuantityButton = ({ children, isActive, onClick }) => {

    const handleClick = () => {
        if (isActive) onClick();
    }

  return (
    <button
      className={`bg-red transition-all text-white px-3 rounded-full w-40 h-10 border-2 border-red flex justify-between items-center absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 ${
        isActive ? " visible scale-100" : "invisible scale-0"
      }`}
    >
      <QuantityIcon increment={false} onClick={() => onClick(false)} />
      <p>{children}</p>
      <QuantityIcon onClick={handleClick} />
    </button>
  );
};
