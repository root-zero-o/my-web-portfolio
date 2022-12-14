import React, { useState } from "react";
import MainKeyword from "../components/MainKeyword";
import NavBar from "../components/NavBar";
import SideBarBtn from "../components/SideBarBtn";

const Index = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const onClickMenu = () => {
    setClicked(!clicked);
  };
  return (
    <div className="w-screen h-screen flex-col relative overflow-x-hidden select-none">
      <NavBar />
      {clicked ? (
        <div>
          <SideBarBtn text="Skills" url="/skills" top="4.5rem" />
          <SideBarBtn text="Project" url="/project" top="9rem" />
          <SideBarBtn text="Contact" url="/contact" top="13.5rem" />
        </div>
      ) : null}
      {clicked ? (
        <div className="w-full flex justify-start px-8 pt-8 desktop:hidden absolute top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:cursor-pointer hover:text-gray-600"
            onClick={onClickMenu}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="w-full flex justify-start px-8 pt-8 desktop:hidden absolute top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 hover:cursor-pointer hover:text-gray-600"
            onClick={onClickMenu}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className=" w-full h-[65%] desktop:h-[85%] flex flex-col items-center justify-center space-y-16 desktop:space-y-20 desktop:py-40 ">
        <h1>???????????????!</h1>
        <div className="w-3/4 h-28 desktop:h-40 bg-gray-100 hover:bg-gray-300 transition-colors"></div>
        <h1>??????????????????.</h1>
      </div>
      <div className="w-full z-10 h-[20%] desktop:h-[15%] flex flex-col justify-center">
        <h3 className="ml-4 pb-4">
          ???????????? ????????? ???, ??? ????????? ??????????????????!
        </h3>
        <div className="w-full flex flex-wrap justify-evenly">
          <MainKeyword keyword="???" color="white" />
          <MainKeyword keyword="??????" color="#FF7816" />
          <MainKeyword keyword="?????????" color="#6D48FF" />
          <MainKeyword keyword="?????????" color="#FF65DD" />
          <MainKeyword keyword="?????????" color="#FBFF48" />
          <MainKeyword keyword="?????? ??????" color="#48E9FF" />
        </div>
      </div>
    </div>
  );
};

export default Index;
