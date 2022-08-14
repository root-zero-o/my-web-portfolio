import React, { useRef, useState } from "react";
import useGetLocation from "../hooks/useGetLocation";
import { cls } from "../libs/utils";

const MainKeyword = ({
  keyword,
  color,
}: {
  keyword: string;
  color: string;
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
      setPositionX(e.pageX - 100);
      setPositionY(e.pageY - 30);
    }
  };

  return (
    <div className=" w-[150px] desktop:w-[200px]">
      <div
        ref={keywordRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={cls(
          "color bg-black w-[150px] h-[50px] desktop:w-[200px] desktop:h-[70px] rounded-full flex items-center justify-center flex-shrink-0  mb-4",
          down === true ? "mouseDown" : ""
        )}
      >
        <span className="font-Pretendard_ExtraBold text-lg desktop:text-2xl">
          {keyword}
        </span>
        <style jsx>{`
          .color {
            color: ${color};
          }
          .mouseDown {
            position: absolute;
            z-index: 1000;
            left: ${positionX}px;
            top: ${positionY}px;
          }
        `}</style>
      </div>
    </div>
  );
};
export default MainKeyword;
