export const DecrementIcon = ({ width, height, isHovering }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 10 2"
    >
      <path fill={isHovering ? "#c73b0f" : "#fff"} d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
};
