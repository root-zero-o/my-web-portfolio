import React, { useRef, useState } from "react";
import useGetLocation from "../hooks/useGetLocation";
import { cls } from "../libs/utils";

const MainKeyword = ({
  keyword,
  bottom,
  left,
}: {
  keyword: string;
  bottom: number;
  left: number;
}) => {
  const [down, setDown] = useState(false);
  const keywordRef = useRef<HTMLDivElement>(null);
  const { initialX, initialY } = useGetLocation(keywordRef);
  const [positionX, setPositionX] = useState(initialX);
  const [positionY, setPositionY] = useState(initialY);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDown(true);
  };

  const onMouseUp = () => {
    setDown(false);
    setPositionX(initialX);
    setPositionY(initialY);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (down) {
      setPositionX(e.clientX - 100);
      setPositionY(e.clientY - 30);
    }
  };

  return (
    <div
      ref={keywordRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={cls(
        "bg-black w-[200px] h-[70px] rounded-full flex items-center justify-center text-white flex-shrink-0 mb-4",
        down === true ? "mouseDown" : ""
      )}
    >
      <span className="font-Pretendard_ExtraBold text-2xl">{keyword}</span>
      <style jsx>{`
        .mouseDown {
          position: absolute;
          z-index: 1000;
          left: ${positionX}px;
          top: ${positionY}px;
        }
      `}</style>
    </div>
  );
};
export default MainKeyword;
