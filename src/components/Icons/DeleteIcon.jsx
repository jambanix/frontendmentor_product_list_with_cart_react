import { useState } from "react";


export const DeleteIcon = ({remove, id}) => {

    const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`flex items-center justify-middle rounded-full border-2 p-1 cursor-pointer ${isHovering ? "border-black" : " border-rose-300"}`}
      onClick={() => remove(id)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill={"none"}
        viewBox="0 0 10 10"
      >
        <path
          fill={isHovering ? "#000" : "#caafa7"}
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </div>
  );
};
