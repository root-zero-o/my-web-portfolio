import React, { useEffect, useState } from "react";

const useGetLocation = (keywordRef: React.RefObject<HTMLDivElement>) => {
  const x = keywordRef.current?.getBoundingClientRect().left;
  const y = keywordRef.current?.getBoundingClientRect().top;
  const [initialX, setInitialX] = useState(x);
  const [initialY, setInitialY] = useState(y);

  useEffect(() => {
    if (x) {
      setInitialX(x - 150);
    }
    if (y) {
      setInitialY(y - 35);
    }
  }, []);
  return { initialX, initialY };
};
export default useGetLocation;
