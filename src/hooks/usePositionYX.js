import { useEffect, useState } from "react";

const usePositionYX = () => {
  const [position, setPosition] = useState({ scrollY: 0, scrollX: 0 });

  useEffect(() => {
    const handlePosition = () =>
      setPosition({ scrollY: window.scrollY, scrollX: window.scrollX });
    window.addEventListener("scroll", handlePosition);

    return () => window.removeEventListener("scroll", handlePosition);
  });

  return position;
};

export default usePositionYX;
