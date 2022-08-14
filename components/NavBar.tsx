import { useRouter } from "next/router";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-16 font-Pretendard_Thin text-lg bg-black desktop:flex desktop:justify-end desktop:items-center absolute top-0 hidden">
      <div className="flex px-6 space-x-10">
        <div className="navbarBtn" onClick={() => router.push("/")}>
          Home
        </div>
        <div className="navbarBtn" onClick={() => router.push("/skills")}>
          Skills
        </div>
        <div className="navbarBtn">Projects</div>
        <div className="text-white">
          <div className="border-2 border-orange-500 px-2 flex items-center justify-center rounded-full hover:translate-y-1 transition-all hover:cursor-pointer">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
