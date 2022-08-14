import { useRouter } from "next/router";
import React from "react";

const SideBarBtn = ({
  text,
  url,
  top,
}: {
  text: string;
  url: string;
  top: string;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${url}`)}
      className="position w-[60px] h-[60px] rounded-full bg-black text-white text-sm flex items-center justify-center font-Pretendard_Bold shadow-md hover:cursor-pointer hover:-translate-y-1 transition-all"
    >
      {text}
      <style jsx>{`
        .position {
          position: absolute;
          top: ${top};
          left: 1rem;
        }
      `}</style>
    </div>
  );
};
export default SideBarBtn;
