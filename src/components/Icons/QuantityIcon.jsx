import { IncrementIcon } from "./IncrementIcon";
import { DecrementIcon } from "./DecrementIcon";
import { useState } from "react";

export const QuantityIcon = ({ onClick, increment = true }) => {

    const [hovering, setIsHovering] = useState(false);

  return (
    <div
      className="border-white rounded-full p-1 h-5 w-5 border flex items-center justify-center hover:bg-white transition-colors"
      onClick={onClick} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
    >
      {increment ? (
        <IncrementIcon height={100} width={100} isHovering={hovering}/>
      ) : (
        <DecrementIcon height={100} width={100} isHovering={hovering}/>
      )}
    </div>
  );
};
