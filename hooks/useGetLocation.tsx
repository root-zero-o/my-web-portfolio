import React, { useEffect, useState } from "react";

const useGetLocation = (keywordRef: React.RefObject<HTMLDivElement>) => {
  const x = keywordRef.current?.getBoundingClientRect().left;
  const y = keywordRef.current?.getBoundingClientRect().top;
  const [initialX, setInitialX] = useState(x);
  const [initialY, setInitialY] = useState(y);

  useEffect(() => {
    setInitialX(x);
    setInitialY(y);
  }, [x, y]);
  return { initialX, initialY };
};
export default useGetLocation;
